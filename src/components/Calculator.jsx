import React, { useState } from 'react';
import { 
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend
} from 'recharts';
import { 
  Calculator as CalcIcon, 
  Zap, 
  DollarSign, 
  TrendingUp, 
  Sun, 
  BarChart3,
  Target,
  Leaf,
  Battery,
  ArrowRight,
  CheckCircle,
  Info,
  RefreshCw
} from 'lucide-react';

const Calculator = () => {
  const [formData, setFormData] = useState({
    monthlyBill: '',
    phase: '1',
    dayAC: '1',
    nightAC: '1',
    systemType: 'hybrid',
  });
  
  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [activeTab, setActiveTab] = useState('summary');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const COLORS = ['#F97316', '#3B82F6', '#10B981', '#8B5CF6', '#EC4899'];

  const calculateSolar = () => {
    if (!formData.monthlyBill) return;
    setIsCalculating(true);
    
    setTimeout(() => {
      const monthlyBill = parseFloat(formData.monthlyBill);
      const electricityRate = 4.5;
      const monthlyConsumption = monthlyBill / electricityRate;
      const annualConsumption = monthlyConsumption * 12;
      const peakSunHours = 4.5;
      const systemEfficiency = 0.82;
      const targetCoverage = formData.systemType === 'offgrid' ? 1.0 : 0.85;
      
      let recommendedSize = (monthlyConsumption * targetCoverage) / (peakSunHours * 30 * systemEfficiency);
      recommendedSize = Math.ceil(recommendedSize * 2) / 2;
      recommendedSize = Math.max(3, Math.min(recommendedSize, 15));

      let costPerKW, batteryCost = 0, batterySize = 0;
      
      if (formData.systemType === 'ongrid') {
        costPerKW = recommendedSize <= 5 ? 23000 : 21000;
      } else if (formData.systemType === 'hybrid') {
        costPerKW = recommendedSize <= 5 ? 27000 : 25000;
        batterySize = Math.ceil(recommendedSize * 1.5);
        batteryCost = batterySize * 10000;
      } else {
        costPerKW = 30000;
        batterySize = Math.ceil(recommendedSize * 3);
        batteryCost = batterySize * 10000;
      }
      
      const systemCost = (recommendedSize * costPerKW) + batteryCost;
      const annualProduction = recommendedSize * peakSunHours * 365 * systemEfficiency;
      const selfConsumptionRate = formData.systemType === 'ongrid' ? 0.7 : 0.9;
      const annualSavings = Math.min(annualProduction * selfConsumptionRate, annualConsumption) * electricityRate;
      const monthlySavings = annualSavings / 12;
      const paybackYears = systemCost / annualSavings;
      
      const degradationRate = 0.005;
      let totalSavings25Years = 0;
      const yearlyData = [];
      let cumulativeSavings = -systemCost;
      
      for (let year = 0; year <= 25; year++) {
        const yearProduction = year === 0 ? 0 : annualProduction * Math.pow(1 - degradationRate, year - 1);
        const yearSavings = year === 0 ? -systemCost : Math.min(yearProduction * selfConsumptionRate, annualConsumption) * electricityRate * Math.pow(1.03, year);
        cumulativeSavings += year === 0 ? 0 : yearSavings;
        totalSavings25Years += year === 0 ? 0 : yearSavings;
        
        yearlyData.push({
          year: `ปี ${year}`,
          yearNum: year,
          production: Math.round(yearProduction),
          savings: Math.round(yearSavings),
          cumulative: Math.round(cumulativeSavings)
        });
      }
      
      const roi = ((totalSavings25Years - systemCost) / systemCost) * 100;
      const co2Reduction = annualProduction * 0.5;
      const panelWattage = 550;
      const panelCount = Math.ceil((recommendedSize * 1000) / panelWattage);
      const roofArea = panelCount * 2.2 * 1.2;
      const avgHourlyConsumption = monthlyConsumption / 30 / 24;
      const backupHours = batterySize > 0 ? Math.round(batterySize / avgHourlyConsumption) : 0;

      // Monthly production data
      const monthlyData = [
        { month: 'ม.ค.', production: Math.round(annualProduction / 12 * 0.85), consumption: Math.round(monthlyConsumption * 0.9) },
        { month: 'ก.พ.', production: Math.round(annualProduction / 12 * 0.9), consumption: Math.round(monthlyConsumption * 0.85) },
        { month: 'มี.ค.', production: Math.round(annualProduction / 12 * 1.0), consumption: Math.round(monthlyConsumption * 0.95) },
        { month: 'เม.ย.', production: Math.round(annualProduction / 12 * 1.1), consumption: Math.round(monthlyConsumption * 1.1) },
        { month: 'พ.ค.', production: Math.round(annualProduction / 12 * 1.05), consumption: Math.round(monthlyConsumption * 1.05) },
        { month: 'มิ.ย.', production: Math.round(annualProduction / 12 * 0.95), consumption: Math.round(monthlyConsumption * 1.0) },
        { month: 'ก.ค.', production: Math.round(annualProduction / 12 * 0.9), consumption: Math.round(monthlyConsumption * 1.0) },
        { month: 'ส.ค.', production: Math.round(annualProduction / 12 * 0.9), consumption: Math.round(monthlyConsumption * 1.0) },
        { month: 'ก.ย.', production: Math.round(annualProduction / 12 * 0.95), consumption: Math.round(monthlyConsumption * 0.95) },
        { month: 'ต.ค.', production: Math.round(annualProduction / 12 * 1.0), consumption: Math.round(monthlyConsumption * 0.9) },
        { month: 'พ.ย.', production: Math.round(annualProduction / 12 * 0.95), consumption: Math.round(monthlyConsumption * 0.85) },
        { month: 'ธ.ค.', production: Math.round(annualProduction / 12 * 0.85), consumption: Math.round(monthlyConsumption * 0.85) },
      ];

      // Cost breakdown for pie chart
      const costBreakdown = [
        { name: 'แผงโซลาร์', value: Math.round(systemCost * 0.4) },
        { name: 'Inverter', value: Math.round(systemCost * 0.15) },
        { name: 'ติดตั้ง', value: Math.round(systemCost * 0.2) },
        { name: 'อุปกรณ์ไฟฟ้า', value: Math.round(systemCost * 0.1) },
        { name: 'อื่นๆ', value: Math.round(systemCost * 0.15) },
      ];
      if (batteryCost > 0) {
        costBreakdown.splice(2, 0, { name: 'แบตเตอรี่', value: batteryCost });
      }

      setResults({
        system: { size: recommendedSize, type: formData.systemType, panelCount, panelWattage, batterySize, roofArea: Math.round(roofArea), backupHours },
        cost: { total: Math.round(systemCost), perKW: Math.round(systemCost / recommendedSize), battery: batteryCost, breakdown: costBreakdown },
        production: { annual: Math.round(annualProduction), monthly: Math.round(annualProduction / 12), daily: Math.round(annualProduction / 365) },
        savings: { monthly: Math.round(monthlySavings), annual: Math.round(annualSavings), total25Years: Math.round(totalSavings25Years), billReduction: Math.round((monthlySavings / monthlyBill) * 100) },
        financial: { paybackYears: Math.round(paybackYears * 10) / 10, roi: Math.round(roi), netProfit: Math.round(totalSavings25Years - systemCost) },
        environmental: { co2Reduction: Math.round(co2Reduction), treesEquivalent: Math.round(co2Reduction / 22) },
        consumption: { monthly: Math.round(monthlyConsumption), annual: Math.round(annualConsumption), monthlyBill },
        yearlyData,
        monthlyData
      });
      
      setIsCalculating(false);
    }, 1500);
  };

  const resetCalculator = () => {
    setFormData({ monthlyBill: '', phase: '1', dayAC: '1', nightAC: '1', systemType: 'hybrid' });
    setResults(null);
    setActiveTab('summary');
  };

  const systemTypeLabels = {
    ongrid: 'On-Grid (ประหยัดค่าไฟ)',
    hybrid: 'Hybrid (ประหยัด + สำรองไฟ)',
    offgrid: 'Off-Grid (อิสระ 100%)'
  };

  return (
    <section id="calculator" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-kb-orange font-semibold text-sm tracking-wider uppercase">Solar Calculator</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">คำนวณความคุ้มค่าโซลาร์เซลล์</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">กรอกข้อมูลการใช้ไฟฟ้าของคุณ เพื่อวิเคราะห์ระบบที่เหมาะสมและความคุ้มทุน</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form - 2 columns */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <CalcIcon className="w-5 h-5 text-kb-orange" />
              ข้อมูลการใช้ไฟฟ้า
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">1. ค่าไฟเฉลี่ย/เดือน (บาท) <span className="text-red-500">*</span></label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input type="number" name="monthlyBill" value={formData.monthlyBill} onChange={handleChange} placeholder="เช่น 3500" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-kb-orange focus:border-kb-orange" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">2. มิเตอร์ไฟกี่เฟส</label>
                <div className="grid grid-cols-2 gap-3">
                  {['1', '3'].map((phase) => (
                    <button key={phase} type="button" onClick={() => setFormData({ ...formData, phase })}
                      className={`py-2.5 px-4 rounded-xl border-2 font-medium transition-all ${formData.phase === phase ? 'border-kb-orange bg-kb-orange/10 text-kb-orange' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>
                      {phase} เฟส
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">3. แอร์กลางวัน</label>
                  <select name="dayAC" value={formData.dayAC} onChange={handleChange} className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-kb-orange">
                    {[0, 1, 2, 3, 4, 5].map((num) => (<option key={num} value={num}>{num} เครื่อง</option>))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">4. แอร์กลางคืน</label>
                  <select name="nightAC" value={formData.nightAC} onChange={handleChange} className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-kb-orange">
                    {[0, 1, 2, 3, 4, 5].map((num) => (<option key={num} value={num}>{num} เครื่อง</option>))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">5. ประเภทระบบ</label>
                <div className="space-y-2">
                  {Object.entries(systemTypeLabels).map(([key, label]) => (
                    <button key={key} type="button" onClick={() => setFormData({ ...formData, systemType: key })}
                      className={`w-full py-2.5 px-4 rounded-xl border-2 text-left text-sm font-medium transition-all ${formData.systemType === key ? 'border-kb-orange bg-kb-orange/10 text-kb-orange' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button onClick={calculateSolar} disabled={!formData.monthlyBill || isCalculating}
                  className="flex-1 bg-kb-orange hover:bg-kb-orange-dark disabled:bg-gray-300 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all">
                  {isCalculating ? (<><RefreshCw className="w-5 h-5 animate-spin" />กำลังคำนวณ...</>) : (<><CalcIcon className="w-5 h-5" />คำนวณ</>)}
                </button>
                {results && (
                  <button onClick={resetCalculator} className="px-4 py-3 border border-gray-300 rounded-xl text-gray-600 hover:bg-gray-50 transition-all">
                    <RefreshCw className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Results - 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            {!results ? (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center min-h-[500px]">
                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <Sun className="w-12 h-12 text-kb-orange" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">พร้อมคำนวณ</h3>
                <p className="text-gray-400">กรอกข้อมูลด้านซ้ายแล้วกดคำนวณ</p>
              </div>
            ) : (
              <>
                {/* Tabs */}
                <div className="flex gap-2 bg-white/10 p-1 rounded-xl">
                  {[
                    { id: 'summary', label: 'สรุป' },
                    { id: 'charts', label: 'กราฟ' },
                    { id: 'projection', label: '25 ปี' },
                  ].map((tab) => (
                    <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 py-2.5 px-4 rounded-lg font-medium transition-all ${activeTab === tab.id ? 'bg-white text-gray-900' : 'text-white hover:bg-white/10'}`}>
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                {activeTab === 'summary' && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* System */}
                    <div className="bg-white rounded-2xl p-5">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><Target className="w-5 h-5 text-kb-orange" />ระบบที่แนะนำ</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-50 rounded-xl p-3"><p className="text-xs text-gray-500">ขนาดระบบ</p><p className="text-xl font-bold text-gray-900">{results.system.size} kW</p></div>
                        <div className="bg-gray-50 rounded-xl p-3"><p className="text-xs text-gray-500">จำนวนแผง</p><p className="text-xl font-bold text-gray-900">{results.system.panelCount} แผง</p></div>
                        <div className="bg-gray-50 rounded-xl p-3"><p className="text-xs text-gray-500">พื้นที่หลังคา</p><p className="text-xl font-bold text-gray-900">{results.system.roofArea} ตร.ม.</p></div>
                        {results.system.batterySize > 0 && <div className="bg-gray-50 rounded-xl p-3"><p className="text-xs text-gray-500">แบตเตอรี่</p><p className="text-xl font-bold text-gray-900">{results.system.batterySize} kWh</p></div>}
                      </div>
                      {results.system.backupHours > 0 && (
                        <div className="mt-3 bg-green-50 rounded-xl p-2.5 flex items-center gap-2">
                          <Battery className="w-4 h-4 text-green-600" />
                          <span className="text-green-700 text-sm font-medium">สำรองไฟได้ ~{results.system.backupHours} ชม.</span>
                        </div>
                      )}
                    </div>

                    {/* Savings */}
                    <div className="bg-gradient-to-br from-kb-orange to-amber-500 rounded-2xl p-5 text-white">
                      <h4 className="font-bold mb-3 flex items-center gap-2"><TrendingUp className="w-5 h-5" />ผลประหยัด</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div><p className="text-white/70 text-xs">ประหยัด/เดือน</p><p className="text-xl font-bold">฿{results.savings.monthly.toLocaleString()}</p></div>
                        <div><p className="text-white/70 text-xs">ประหยัด/ปี</p><p className="text-xl font-bold">฿{results.savings.annual.toLocaleString()}</p></div>
                        <div><p className="text-white/70 text-xs">ลดค่าไฟได้</p><p className="text-xl font-bold">{results.savings.billReduction}%</p></div>
                        <div><p className="text-white/70 text-xs">คืนทุน</p><p className="text-xl font-bold">{results.financial.paybackYears} ปี</p></div>
                      </div>
                    </div>

                    {/* Investment */}
                    <div className="bg-white rounded-2xl p-5">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><DollarSign className="w-5 h-5 text-kb-orange" />การลงทุน</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="text-gray-600 text-sm">ราคาระบบ</span>
                          <span className="text-lg font-bold text-gray-900">฿{results.cost.total.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-gray-600 text-sm">ราคาต่อ kW</span>
                          <span className="font-semibold text-gray-700">฿{results.cost.perKW.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    {/* 25 Year */}
                    <div className="bg-white rounded-2xl p-5">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><BarChart3 className="w-5 h-5 text-kb-orange" />สรุป 25 ปี</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="text-gray-600 text-sm">ประหยัดรวม</span>
                          <span className="text-lg font-bold text-green-600">฿{results.savings.total25Years.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="text-gray-600 text-sm">กำไรสุทธิ</span>
                          <span className="text-lg font-bold text-green-600">฿{results.financial.netProfit.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-gray-600 text-sm">ROI</span>
                          <span className="text-lg font-bold text-kb-orange">{results.financial.roi}%</span>
                        </div>
                      </div>
                    </div>

                    {/* Environmental */}
                    <div className="md:col-span-2 bg-green-50 rounded-2xl p-5">
                      <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2"><Leaf className="w-5 h-5" />ผลกระทบสิ่งแวดล้อม (ต่อปี)</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div><p className="text-green-600 text-sm">ลด CO₂</p><p className="text-xl font-bold text-green-800">{results.environmental.co2Reduction.toLocaleString()} kg</p></div>
                        <div><p className="text-green-600 text-sm">เทียบเท่าปลูกต้นไม้</p><p className="text-xl font-bold text-green-800">{results.environmental.treesEquivalent} ต้น</p></div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'charts' && (
                  <div className="space-y-6">
                    {/* Monthly Production vs Consumption */}
                    <div className="bg-white rounded-2xl p-6">
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-kb-orange" />
                        การผลิตไฟฟ้า vs การใช้ไฟฟ้า (รายเดือน)
                      </h4>
                      <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={results.monthlyData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                            <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                            <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `${v}`} />
                            <Tooltip formatter={(value) => [`${value.toLocaleString()} kWh`]} />
                            <Legend />
                            <Bar dataKey="production" name="ผลิตได้" fill="#F97316" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="consumption" name="ใช้ไป" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    {/* Cost Breakdown Pie Chart */}
                    <div className="bg-white rounded-2xl p-6">
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-kb-orange" />
                        สัดส่วนต้นทุนระบบ
                      </h4>
                      <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie data={results.cost.breakdown} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={2} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={false}>
                              {results.cost.breakdown.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip formatter={(value) => [`฿${value.toLocaleString()}`]} />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="flex flex-wrap justify-center gap-4 mt-4">
                        {results.cost.breakdown.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[idx % COLORS.length] }}></div>
                            <span className="text-sm text-gray-600">{item.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'projection' && (
                  <div className="space-y-6">
                    {/* 25 Year Cash Flow */}
                    <div className="bg-white rounded-2xl p-6">
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-kb-orange" />
                        กระแสเงินสดสะสม 25 ปี
                      </h4>
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={results.yearlyData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                            <defs>
                              <linearGradient id="colorCumulative" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#F97316" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#F97316" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                            <XAxis dataKey="year" tick={{ fontSize: 10 }} interval={4} />
                            <YAxis tick={{ fontSize: 10 }} tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`} />
                            <Tooltip formatter={(value) => [`฿${value.toLocaleString()}`]} labelFormatter={(label) => label} />
                            <Area type="monotone" dataKey="cumulative" name="เงินสดสะสม" stroke="#F97316" strokeWidth={2} fillOpacity={1} fill="url(#colorCumulative)" />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                        <div className="bg-gray-50 rounded-xl p-3">
                          <p className="text-xs text-gray-500">จุดคุ้มทุน</p>
                          <p className="text-lg font-bold text-kb-orange">ปีที่ {results.financial.paybackYears}</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-3">
                          <p className="text-xs text-gray-500">กำไรปีที่ 25</p>
                          <p className="text-lg font-bold text-green-600">฿{results.financial.netProfit.toLocaleString()}</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-3">
                          <p className="text-xs text-gray-500">ROI</p>
                          <p className="text-lg font-bold text-kb-orange">{results.financial.roi}%</p>
                        </div>
                      </div>
                    </div>

                    {/* Yearly Savings Table */}
                    <div className="bg-white rounded-2xl p-6">
                      <h4 className="font-bold text-gray-900 mb-4">รายละเอียดรายปี</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="py-2 px-3 text-left text-gray-500 font-medium">ปี</th>
                              <th className="py-2 px-3 text-right text-gray-500 font-medium">ผลิตได้ (kWh)</th>
                              <th className="py-2 px-3 text-right text-gray-500 font-medium">ประหยัด (฿)</th>
                              <th className="py-2 px-3 text-right text-gray-500 font-medium">สะสม (฿)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {results.yearlyData.filter(d => d.yearNum > 0 && d.yearNum <= 10).map((row) => (
                              <tr key={row.yearNum} className="border-b border-gray-100">
                                <td className="py-2 px-3 font-medium">{row.yearNum}</td>
                                <td className="py-2 px-3 text-right">{row.production.toLocaleString()}</td>
                                <td className="py-2 px-3 text-right text-green-600">+{row.savings.toLocaleString()}</td>
                                <td className={`py-2 px-3 text-right font-medium ${row.cumulative >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                                  {row.cumulative.toLocaleString()}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {/* CTA */}
                <a href="#contact" className="block w-full bg-kb-orange hover:bg-kb-orange-dark text-white py-4 rounded-xl font-semibold text-center transition-all flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  สนใจติดตั้ง ติดต่อเราเลย
                  <ArrowRight className="w-5 h-5" />
                </a>

                <div className="flex items-start gap-2 text-gray-400 text-xs">
                  <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <p>* ผลการคำนวณเป็นการประมาณการเบื้องต้น ราคาและผลประหยัดจริงอาจแตกต่างตามสภาพหน้างาน</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
