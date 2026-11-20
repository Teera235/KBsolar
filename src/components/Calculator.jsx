import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend
} from 'recharts';
import { 
  Calculator as CalcIcon, 
  Sun,
  Moon,
  Info,
  Zap,
  DollarSign,
  TrendingUp,
  BarChart3,
  Target,
  Leaf,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { useLang } from '../i18n';
import { SectionHeading } from './ui';

const Calculator = () => {
  const { t } = useLang();
  const [formData, setFormData] = useState({
    monthlyBill: '',
    buildingType: '',
    phase: '3',
    usageRatio: 50,
  });

  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [calculationProgress, setCalculationProgress] = useState(0);
  const [activeTab, setActiveTab] = useState('summary');
  const [errors, setErrors] = useState({});
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showToast, setShowToast] = useState({ show: false, message: '', type: 'success' });

  const COLORS = ['#F97316', '#3B82F6', '#10B981', '#8B5CF6', '#EC4899'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Real-time validation for monthlyBill
    if (name === 'monthlyBill') {
      // Only allow numbers and decimal point
      const numericValue = value.replace(/[^\d.]/g, '');
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    
    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSliderChange = (e) => {
    setFormData({ ...formData, usageRatio: parseInt(e.target.value) });
  };

  const showToastMessage = (message, type = 'success') => {
    setShowToast({ show: true, message, type });
    setTimeout(() => {
      setShowToast({ show: false, message: '', type: 'success' });
    }, 4000);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.monthlyBill) {
      newErrors.monthlyBill = { th: 'กรุณากรอกค่าไฟฟ้าต่อเดือน', en: 'Please enter your monthly electricity bill' };
    } else if (isNaN(formData.monthlyBill) || parseFloat(formData.monthlyBill) <= 0) {
      newErrors.monthlyBill = { th: 'กรุณากรอกตัวเลขที่มากกว่า 0', en: 'Please enter a number greater than 0' };
    } else if (parseFloat(formData.monthlyBill) < 500) {
      newErrors.monthlyBill = { th: 'ค่าไฟฟ้าต่ำกว่า 500 บาท อาจไม่คุ้มค่าติดตั้งโซลาร์', en: 'Bills under 500 THB may not justify a solar installation' };
    }
    
    if (!formData.buildingType) {
      newErrors.buildingType = { th: 'กรุณาเลือกประเภทอาคาร', en: 'Please select a building type' };
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateSolar = () => {
    if (!validateForm()) {
      showToastMessage({ th: 'กรุณาตรวจสอบข้อมูลให้ครบถ้วน', en: 'Please check that all fields are complete' }, 'error');
      return;
    }

    setIsCalculating(true);
    setCalculationProgress(0);
    
    // Simulate progress
    const progressInterval = setInterval(() => {
      setCalculationProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 100);
    
    setTimeout(() => {
      clearInterval(progressInterval);
      setCalculationProgress(100);
      const monthlyBill = parseFloat(formData.monthlyBill);
      const electricityRate = 4.5;
      const monthlyConsumption = monthlyBill / electricityRate;
      const annualConsumption = monthlyConsumption * 12;
      const peakSunHours = 4.5;
      const systemEfficiency = 0.82;
      
      // Adjust target coverage based on building type
      let targetCoverage = 0.85;
      if (formData.buildingType === 'industrial') targetCoverage = 0.9;
      if (formData.buildingType === 'residential') targetCoverage = 0.8;
      
      let recommendedSize = (monthlyConsumption * targetCoverage) / (peakSunHours * 30 * systemEfficiency);
      recommendedSize = Math.ceil(recommendedSize * 2) / 2;
      recommendedSize = Math.max(3, Math.min(recommendedSize, 20));

      // Cost calculation
      let costPerKW = recommendedSize <= 5 ? 18000 : 16000;
      const systemCost = recommendedSize * costPerKW;
      
      const annualProduction = recommendedSize * peakSunHours * 365 * systemEfficiency;
      const selfConsumptionRate = 0.75;
      const electricityRateAdjusted = 4.8;
      const annualSavings = Math.min(annualProduction * selfConsumptionRate, annualConsumption) * electricityRateAdjusted;
      const monthlySavings = annualSavings / 12;
      const paybackYears = systemCost / annualSavings;
      
      const degradationRate = 0.005;
      let totalSavings25Years = 0;
      const yearlyData = [];
      let cumulativeSavings = -systemCost;
      
      for (let year = 0; year <= 25; year++) {
        const yearProduction = year === 0 ? 0 : annualProduction * Math.pow(1 - degradationRate, year - 1);
        const yearSavings = year === 0 ? -systemCost : Math.min(yearProduction * selfConsumptionRate, annualConsumption) * electricityRateAdjusted * Math.pow(1.03, year);
        cumulativeSavings += year === 0 ? 0 : yearSavings;
        totalSavings25Years += year === 0 ? 0 : yearSavings;
        
        yearlyData.push({
          year: { th: `ปี ${year}`, en: `Year ${year}` },
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

      // Monthly production data
      const monthlyData = [
        { month: { th: 'ม.ค.', en: 'Jan' }, production: Math.round(annualProduction / 12 * 0.85), consumption: Math.round(monthlyConsumption * 0.9) },
        { month: { th: 'ก.พ.', en: 'Feb' }, production: Math.round(annualProduction / 12 * 0.9), consumption: Math.round(monthlyConsumption * 0.85) },
        { month: { th: 'มี.ค.', en: 'Mar' }, production: Math.round(annualProduction / 12 * 1.0), consumption: Math.round(monthlyConsumption * 0.95) },
        { month: { th: 'เม.ย.', en: 'Apr' }, production: Math.round(annualProduction / 12 * 1.1), consumption: Math.round(monthlyConsumption * 1.1) },
        { month: { th: 'พ.ค.', en: 'May' }, production: Math.round(annualProduction / 12 * 1.05), consumption: Math.round(monthlyConsumption * 1.05) },
        { month: { th: 'มิ.ย.', en: 'Jun' }, production: Math.round(annualProduction / 12 * 0.95), consumption: Math.round(monthlyConsumption * 1.0) },
        { month: { th: 'ก.ค.', en: 'Jul' }, production: Math.round(annualProduction / 12 * 0.9), consumption: Math.round(monthlyConsumption * 1.0) },
        { month: { th: 'ส.ค.', en: 'Aug' }, production: Math.round(annualProduction / 12 * 0.9), consumption: Math.round(monthlyConsumption * 1.0) },
        { month: { th: 'ก.ย.', en: 'Sep' }, production: Math.round(annualProduction / 12 * 0.95), consumption: Math.round(monthlyConsumption * 0.95) },
        { month: { th: 'ต.ค.', en: 'Oct' }, production: Math.round(annualProduction / 12 * 1.0), consumption: Math.round(monthlyConsumption * 0.9) },
        { month: { th: 'พ.ย.', en: 'Nov' }, production: Math.round(annualProduction / 12 * 0.95), consumption: Math.round(monthlyConsumption * 0.85) },
        { month: { th: 'ธ.ค.', en: 'Dec' }, production: Math.round(annualProduction / 12 * 0.85), consumption: Math.round(monthlyConsumption * 0.85) },
      ];

      // Cost breakdown for pie chart
      const costBreakdown = [
        { name: { th: 'แผงโซลาร์', en: 'Solar panels' }, value: Math.round(systemCost * 0.4) },
        { name: { th: 'Inverter', en: 'Inverter' }, value: Math.round(systemCost * 0.15) },
        { name: { th: 'ติดตั้ง', en: 'Installation' }, value: Math.round(systemCost * 0.2) },
        { name: { th: 'อุปกรณ์ไฟฟ้า', en: 'Electrical equipment' }, value: Math.round(systemCost * 0.1) },
        { name: { th: 'อื่นๆ', en: 'Other' }, value: Math.round(systemCost * 0.15) },
      ];

      setResults({
        system: { size: recommendedSize, panelCount, panelWattage, roofArea: Math.round(roofArea) },
        cost: { total: Math.round(systemCost), perKW: Math.round(systemCost / recommendedSize), breakdown: costBreakdown },
        production: { annual: Math.round(annualProduction), monthly: Math.round(annualProduction / 12), daily: Math.round(annualProduction / 365) },
        savings: { monthly: Math.round(monthlySavings), annual: Math.round(annualSavings), total25Years: Math.round(totalSavings25Years), billReduction: Math.round((monthlySavings / monthlyBill) * 100) },
        financial: { paybackYears: Math.round(paybackYears * 10) / 10, roi: Math.round(roi), netProfit: Math.round(totalSavings25Years - systemCost) },
        environmental: { co2Reduction: Math.round(co2Reduction), treesEquivalent: Math.round(co2Reduction / 22) },
        consumption: { monthly: Math.round(monthlyConsumption), annual: Math.round(annualConsumption), monthlyBill },
        yearlyData,
        monthlyData
      });
      
      setIsCalculating(false);
      setCalculationProgress(0);
      setActiveTab('summary');
      
      // Success notification
      showToastMessage({ th: 'คำนวณเสร็จแล้ว! ดูผลลัพธ์ด้านล่าง', en: 'Calculation complete! See the results below' }, 'success');
      
      // Success animation
      setTimeout(() => {
        const element = document.getElementById('calculator-results');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }, 1000);
  };

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden no-transform" style={{ transform: 'none !important', writingMode: 'horizontal-tb', direction: 'ltr' }}>
      {/* Background Decoration */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title={t('คำนวณความคุ้มค่า', 'Solar Savings')}
          highlight={t('โซลาร์เซลล์', 'Calculator')}
          subtitle={t('กรอกข้อมูลการใช้ไฟฟ้าของคุณ เพื่อวิเคราะห์ระบบที่เหมาะสมและความคุ้มทุน', 'Enter your electricity usage to find the right system size and see how quickly it pays for itself')}
        />

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Form - 2 columns */}
          <div className="lg:col-span-2">
            <motion.div 
              className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 sticky top-4 h-fit"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-5">
                {/* Monthly Bill Input */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    {t('ค่าไฟฟ้าต่อเดือน (บาท)', 'Monthly electricity bill (THB)')} <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="monthlyBill" 
                    value={formData.monthlyBill} 
                    onChange={handleChange} 
                    placeholder={t('เช่น 3000', 'e.g. 3000')} 
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-kb-orange transition-all text-gray-900 ${
                      errors.monthlyBill 
                        ? 'border-red-300 focus:border-red-500 bg-red-50' 
                        : 'border-gray-200 focus:border-kb-orange'
                    }`}
                  />
                  {!errors.monthlyBill && formData.monthlyBill && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-600 text-sm mt-1 flex items-center gap-1"
                    >
                      <CheckCircle className="w-4 h-4" />
                      {t(`ดูดี! ค่าไฟ ${parseFloat(formData.monthlyBill).toLocaleString()} บาท/เดือน`, `Looks good! Bill: ${parseFloat(formData.monthlyBill).toLocaleString()} THB/month`)}
                    </motion.p>
                  )}
                  {errors.monthlyBill && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1 flex items-center gap-1"
                    >
                      <Info className="w-4 h-4" />
                      {t(errors.monthlyBill)}
                    </motion.p>
                  )}
                </div>

                {/* Building Type Dropdown */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    {t('ประเภทอาคาร', 'Building type')} <span className="text-red-500">*</span>
                  </label>
                  <select 
                    name="buildingType" 
                    value={formData.buildingType} 
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-kb-orange transition-all text-gray-900 bg-white ${
                      errors.buildingType 
                        ? 'border-red-300 focus:border-red-500 bg-red-50' 
                        : 'border-gray-200 focus:border-kb-orange'
                    }`}
                  >
                    <option value="">{t('เลือกประเภทอาคาร', 'Select building type')}</option>
                    <option value="residential">{t('บ้านพักอาศัย', 'Residential home')}</option>
                    <option value="commercial">{t('อาคารพาณิชย์', 'Commercial building')}</option>
                    <option value="industrial">{t('โรงงานอุตสาหกรรม', 'Industrial factory')}</option>
                    <option value="agricultural">{t('เกษตรกรรม', 'Agriculture')}</option>
                  </select>
                  {!errors.buildingType && formData.buildingType && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-600 text-sm mt-1 flex items-center gap-1"
                    >
                      <CheckCircle className="w-4 h-4" />
                      {formData.buildingType === 'residential' ? t('เลือกบ้านพักอาศัยแล้ว', 'Selected: Residential home') : 
                       formData.buildingType === 'commercial' ? t('เลือกอาคารพาณิชย์แล้ว', 'Selected: Commercial building') : 
                       formData.buildingType === 'industrial' ? t('เลือกโรงงานอุตสาหกรรมแล้ว', 'Selected: Industrial factory') : t('เลือกเกษตรกรรมแล้ว', 'Selected: Agriculture')}
                    </motion.p>
                  )}
                  {errors.buildingType && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1 flex items-center gap-1"
                    >
                      <Info className="w-4 h-4" />
                      {t(errors.buildingType)}
                    </motion.p>
                  )}
                </div>

                {/* Phase Selection */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">
                    {t('ระบบไฟฟ้าของบ้าน', 'Electrical supply')}
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="phase" 
                        value="1" 
                        checked={formData.phase === '1'}
                        onChange={handleChange}
                        className="w-5 h-5 text-kb-orange focus:ring-kb-orange"
                      />
                      <span className="text-gray-700">{t('1 เฟส', '1-phase')}</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="phase" 
                        value="3" 
                        checked={formData.phase === '3'}
                        onChange={handleChange}
                        className="w-5 h-5 text-kb-orange focus:ring-kb-orange"
                      />
                      <span className="text-gray-700">{t('3 เฟส', '3-phase')}</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="phase" 
                        value="unknown" 
                        checked={formData.phase === 'unknown'}
                        onChange={handleChange}
                        className="w-5 h-5 text-kb-orange focus:ring-kb-orange"
                      />
                      <span className="text-gray-700">{t('ไม่ทราบ', 'Not sure')}</span>
                    </label>
                  </div>
                </div>

                {/* Usage Ratio Slider */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">
                    {t('อัตราส่วนการใช้ไฟฟ้าช่วงกลางวัน (%)', 'Share of electricity used during the day (%)')}
                  </label>
                  <div className="relative pt-2">
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={formData.usageRatio}
                      onChange={handleSliderChange}
                      className="w-full h-2 rounded-lg appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, #F97316 0%, #F97316 ${formData.usageRatio}%, #E5E7EB ${formData.usageRatio}%, #E5E7EB 100%)`
                      }}
                    />
                    <div className="absolute left-0 -top-1 flex items-center gap-1 text-kb-orange">
                      <Sun className="w-5 h-5" />
                    </div>
                    <div className="absolute right-0 -top-1 flex items-center gap-1 text-gray-600">
                      <Moon className="w-5 h-5" />
                    </div>
                  </div>
                  
                  {/* Display percentages */}
                  <div className="flex justify-between mt-4 text-center">
                    <div className="flex-1 border-r border-gray-200">
                      <p className="text-sm text-gray-500 mb-1">{t('ช่วงกลางวัน', 'Daytime')}</p>
                      <p className="text-2xl font-bold text-kb-orange">{formData.usageRatio}%</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 mb-1">{t('ช่วงกลางคืน', 'Nighttime')}</p>
                      <p className="text-2xl font-bold text-gray-600">{100 - formData.usageRatio}%</p>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-4">
                  <div className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-kb-orange flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-700 space-y-2">
                      <p className="font-semibold text-kb-orange">💡 {t('เคล็ดลับการใช้งาน', 'Tips')}</p>
                      <div className="space-y-1">
                        <p className="flex items-start gap-2">
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-kb-orange text-white text-xs font-bold flex-shrink-0">1</span>
                          <span>{t('ค่าไฟฟ้าต่ำกว่า 500 บาท อาจไม่คุ้มค่าติดตั้ง', 'Bills under 500 THB may not be worth installing for')}</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-kb-orange text-white text-xs font-bold flex-shrink-0">2</span>
                          <span>{t('ผลการคำนวณเป็นการประมาณเบื้องต้น', 'Results are preliminary estimates')}</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-kb-orange text-white text-xs font-bold flex-shrink-0">3</span>
                          <span>{t('ติดต่อเราเพื่อรับคำปรึกษาฟรีจากทีมวิศวกร', 'Contact us for a free consultation with our engineers')}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Calculate Button */}
                <button 
                  onClick={calculateSolar}
                  disabled={isCalculating}
                  className="btn-kb w-full py-4 text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {/* Progress Bar */}
                  {isCalculating && (
                    <div 
                      className="absolute inset-0 bg-orange-600 transition-all duration-300"
                      style={{ width: `${calculationProgress}%` }}
                    />
                  )}
                  
                  <div className="relative z-10 flex items-center gap-2">
                    {isCalculating ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        {t('กำลังคำนวณ...', 'Calculating...')} {calculationProgress}%
                      </>
                    ) : (
                      <>
                        <CalcIcon className="w-5 h-5" />
                        {t('คำนวณความคุ้มค่า', 'Calculate savings')}
                      </>
                    )}
                  </div>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Results - 3 columns */}
          <div className="lg:col-span-3" id="calculator-results">
            {isCalculating ? (
              <motion.div 
                className="bg-white rounded-2xl p-12 text-center flex flex-col items-center justify-center"
                style={{ minHeight: '600px' }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="w-24 h-24 bg-kb-orange/10 rounded-full flex items-center justify-center mb-6"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <CalcIcon className="w-12 h-12 text-kb-orange" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('กำลังคำนวณ', 'Calculating')}</h3>
                <p className="text-gray-600 mb-4">{t('กำลังวิเคราะห์ข้อมูลของคุณ...', 'Analyzing your data...')}</p>
                
                {/* Progress Bar */}
                <div className="w-full max-w-xs bg-gray-200 rounded-full h-2 mb-2">
                  <motion.div 
                    className="bg-kb-orange h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${calculationProgress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <p className="text-sm text-gray-500">{calculationProgress}% {t('เสร็จแล้ว', 'complete')}</p>
              </motion.div>
            ) : !results ? (
              <motion.div 
                className="bg-white/50 rounded-2xl p-12 text-center flex flex-col items-center justify-center"
                style={{ minHeight: '600px' }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="w-24 h-24 bg-kb-orange/10 rounded-full flex items-center justify-center mb-6"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sun className="w-12 h-12 text-kb-orange" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('พร้อมคำนวณ', 'Ready to calculate')}</h3>
                <p className="text-gray-600">{t('กรอกข้อมูลด้านซ้ายแล้วกดคำนวณ', 'Fill in the form and press Calculate')}</p>
              </motion.div>
            ) : (
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Success Header */}
                <motion.div 
                  className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle className="w-8 h-8" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold">{t('คำนวณเสร็จแล้ว!', 'Calculation complete!')}</h3>
                      <p className="text-green-100">{t('ระบบโซลาร์เซลล์ที่เหมาะสมกับคุณ', 'The right solar system for you')}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Tabs */}
                <div className="flex gap-2 bg-white p-1 rounded-xl shadow-sm">
                  {[
                    { id: 'summary', label: t('สรุป', 'Summary') },
                    { id: 'charts', label: t('กราฟ', 'Charts') },
                    { id: 'projection', label: t('25 ปี', '25 years') },
                  ].map((tab) => (
                    <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 py-2.5 px-4 rounded-lg font-medium transition-all ${activeTab === tab.id ? 'bg-kb-orange text-white' : 'text-gray-600 hover:bg-gray-50'}`}>
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                {activeTab === 'summary' && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* System */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><Target className="w-5 h-5 text-kb-orange" />{t('ระบบที่แนะนำ', 'Recommended system')}</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-50 rounded-xl p-3"><p className="text-xs text-gray-500">{t('ขนาดระบบ', 'System size')}</p><p className="text-xl font-bold text-kb-accent">{results.system.size} kW</p></div>
                        <div className="bg-gray-50 rounded-xl p-3"><p className="text-xs text-gray-500">{t('จำนวนแผง', 'Number of panels')}</p><p className="text-xl font-bold text-gray-900">{results.system.panelCount} {t('แผง', 'panels')}</p></div>
                        <div className="bg-gray-50 rounded-xl p-3"><p className="text-xs text-gray-500">{t('พื้นที่หลังคา', 'Roof area')}</p><p className="text-xl font-bold text-gray-900">{results.system.roofArea} {t('ตร.ม.', 'm²')}</p></div>
                        <div className="bg-gray-50 rounded-xl p-3"><p className="text-xs text-gray-500">{t('กำลังแผง', 'Panel wattage')}</p><p className="text-xl font-bold text-gray-900">{results.system.panelWattage}W</p></div>
                      </div>
                    </div>

                    {/* Savings */}
                    <div className="bg-kb-orange rounded-2xl p-5 text-white shadow-lg">
                      <h4 className="font-bold mb-3 flex items-center gap-2"><TrendingUp className="w-5 h-5" />{t('ผลประหยัด', 'Savings')}</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div><p className="text-white/70 text-xs">{t('ประหยัด/เดือน', 'Savings/month')}</p><p className="text-xl font-bold">฿{results.savings.monthly.toLocaleString()}</p></div>
                        <div><p className="text-white/70 text-xs">{t('ประหยัด/ปี', 'Savings/year')}</p><p className="text-xl font-bold">฿{results.savings.annual.toLocaleString()}</p></div>
                        <div><p className="text-white/70 text-xs">{t('ลดค่าไฟได้', 'Bill reduction')}</p><p className="text-xl font-bold">{results.savings.billReduction}%</p></div>
                        <div><p className="text-white/70 text-xs">{t('คืนทุน', 'Payback')}</p><p className="text-xl font-bold">{results.financial.paybackYears} {t('ปี', 'years')}</p></div>
                      </div>
                    </div>

                    {/* Investment */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><DollarSign className="w-5 h-5 text-kb-orange" />{t('การลงทุน', 'Investment')}</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="text-gray-600 text-sm">{t('ราคาระบบ', 'System price')}</span>
                          <span className="text-lg font-bold text-kb-accent">฿{results.cost.total.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-gray-600 text-sm">{t('ราคาต่อ kW', 'Price per kW')}</span>
                          <span className="font-semibold text-gray-700">฿{results.cost.perKW.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    {/* 25 Year */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><BarChart3 className="w-5 h-5 text-kb-orange" />{t('สรุป 25 ปี', '25-year summary')}</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="text-gray-600 text-sm">{t('ประหยัดรวม', 'Total savings')}</span>
                          <span className="text-lg font-bold text-green-600">฿{results.savings.total25Years.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="text-gray-600 text-sm">{t('กำไรสุทธิ', 'Net profit')}</span>
                          <span className="text-lg font-bold text-green-600">฿{results.financial.netProfit.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-gray-600 text-sm">ROI</span>
                          <span className="text-lg font-bold text-kb-accent">{results.financial.roi}%</span>
                        </div>
                      </div>
                    </div>

                    {/* Environmental */}
                    <div className="md:col-span-2 bg-green-50 rounded-2xl p-5 shadow-sm">
                      <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2"><Leaf className="w-5 h-5" />{t('ผลกระทบสิ่งแวดล้อม (ต่อปี)', 'Environmental impact (per year)')}</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div><p className="text-green-600 text-sm">{t('ลด CO₂', 'CO₂ reduction')}</p><p className="text-xl font-bold text-green-800">{results.environmental.co2Reduction.toLocaleString()} kg</p></div>
                        <div><p className="text-green-600 text-sm">{t('เทียบเท่าปลูกต้นไม้', 'Equivalent trees planted')}</p><p className="text-xl font-bold text-green-800">{results.environmental.treesEquivalent} {t('ต้น', 'trees')}</p></div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'charts' && (
                  <div className="space-y-6">
                    {/* Monthly Production vs Consumption */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-kb-orange" />
                        {t('การผลิตไฟฟ้า vs การใช้ไฟฟ้า (รายเดือน)', 'Generation vs. consumption (monthly)')}
                      </h4>
                      <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={results.monthlyData.map(d => ({ ...d, month: t(d.month) }))} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                            <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                            <YAxis tick={{ fontSize: 11 }} />
                            <Tooltip formatter={(value) => [`${value.toLocaleString()} kWh`]} />
                            <Legend />
                            <Bar dataKey="production" name={t('ผลิตได้', 'Generated')} fill="#F97316" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="consumption" name={t('ใช้ไป', 'Consumed')} fill="#3B82F6" radius={[4, 4, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    {/* Cost Breakdown Pie Chart */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-kb-orange" />
                        {t('สัดส่วนต้นทุนระบบ', 'System cost breakdown')}
                      </h4>
                      <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie data={results.cost.breakdown.map(d => ({ ...d, name: t(d.name) }))} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={2} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={false}>
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
                            <span className="text-sm text-gray-600">{t(item.name)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'projection' && (
                  <div className="space-y-6">
                    {/* 25 Year Cash Flow */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-kb-orange" />
                        {t('กระแสเงินสดสะสม 25 ปี', 'Cumulative cash flow over 25 years')}
                      </h4>
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={results.yearlyData.map(d => ({ ...d, year: t(d.year) }))} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
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
                            <Area type="monotone" dataKey="cumulative" name={t('เงินสดสะสม', 'Cumulative cash')} stroke="#F97316" strokeWidth={2} fillOpacity={1} fill="url(#colorCumulative)" />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                        <div className="bg-gray-50 rounded-xl p-3">
                          <p className="text-xs text-gray-500">{t('จุดคุ้มทุน', 'Break-even')}</p>
                          <p className="text-lg font-bold text-kb-accent">{t('ปีที่', 'Year')} {results.financial.paybackYears}</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-3">
                          <p className="text-xs text-gray-500">{t('กำไรปีที่ 25', 'Profit by year 25')}</p>
                          <p className="text-lg font-bold text-green-600">฿{results.financial.netProfit.toLocaleString()}</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-3">
                          <p className="text-xs text-gray-500">ROI</p>
                          <p className="text-lg font-bold text-kb-accent">{results.financial.roi}%</p>
                        </div>
                      </div>
                    </div>

                    {/* Yearly Savings Table */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-4">{t('รายละเอียดรายปี (10 ปีแรก)', 'Year-by-year details (first 10 years)')}</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="py-2 px-3 text-left text-gray-500 font-medium">{t('ปี', 'Year')}</th>
                              <th className="py-2 px-3 text-right text-gray-500 font-medium">{t('ผลิตได้ (kWh)', 'Generated (kWh)')}</th>
                              <th className="py-2 px-3 text-right text-gray-500 font-medium">{t('ประหยัด (฿)', 'Savings (฿)')}</th>
                              <th className="py-2 px-3 text-right text-gray-500 font-medium">{t('สะสม (฿)', 'Cumulative (฿)')}</th>
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
                <a href="#contact" className="btn-kb w-full py-4">
                  <CheckCircle className="w-5 h-5" />
                  {t('สนใจติดตั้ง ติดต่อเราเลย', 'Interested? Contact us')}
                  <ArrowRight className="w-5 h-5" />
                </a>

                <div className="flex items-start gap-2 text-gray-500 text-xs bg-white/50 p-3 rounded-lg">
                  <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <p>{t('* ผลการคำนวณเป็นการประมาณการเบื้องต้น ราคาและผลประหยัดจริงอาจแตกต่างตามสภาพหน้างาน', '* These results are preliminary estimates. Actual prices and savings may vary depending on site conditions.')}</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Toast Notification */}
        {showToast.show && (
          <motion.div 
            className="fixed top-4 right-4 z-50 max-w-sm"
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
          >
            <div className={`rounded-2xl p-4 shadow-2xl border-l-4 ${
              showToast.type === 'success' 
                ? 'bg-green-50 border-green-500 text-green-800' 
                : 'bg-red-50 border-red-500 text-red-800'
            }`}>
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  showToast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                }`}>
                  {showToast.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-white" />
                  ) : (
                    <Info className="w-5 h-5 text-white" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">{t(showToast.message)}</p>
                </div>
                <button 
                  onClick={() => setShowToast({ show: false, message: '', type: 'success' })}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Error Modal - Keep for detailed errors */}
        {showErrorModal && (
          <motion.div 
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowErrorModal(false)}
          >
            <motion.div 
              className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Info className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('ข้อมูลไม่ครบถ้วน', 'Incomplete information')}</h3>
                <p className="text-gray-600 mb-6">{t('กรุณาตรวจสอบและแก้ไขข้อมูลที่มีปัญหา', 'Please review and correct the fields below')}</p>
                
                <div className="space-y-2 text-left mb-6">
                  {Object.entries(errors).map(([field, error]) => (
                    <div key={field} className="flex items-start gap-2 text-sm">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-red-600">{t(error)}</span>
                    </div>
                  ))}
                </div>
                
                <button
                  onClick={() => setShowErrorModal(false)}
                  className="btn-kb w-full"
                >
                  {t('เข้าใจแล้ว', 'Got it')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #F97316;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(249, 115, 22, 0.4);
        }
        
        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #F97316;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 8px rgba(249, 115, 22, 0.4);
        }
      `}</style>
    </section>
  );
};

export default Calculator;
