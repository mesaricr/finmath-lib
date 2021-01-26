var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":99,"id":35196,"methods":[{"el":32,"sc":2,"sl":30},{"el":37,"sc":2,"sl":34},{"el":42,"sc":2,"sl":39},{"el":47,"sc":2,"sl":44},{"el":52,"sc":2,"sl":49},{"el":57,"sc":2,"sl":54},{"el":62,"sc":2,"sl":59},{"el":67,"sc":2,"sl":64},{"el":72,"sc":2,"sl":69},{"el":77,"sc":2,"sl":74},{"el":82,"sc":2,"sl":79},{"el":87,"sc":2,"sl":84},{"el":92,"sc":2,"sl":89},{"el":98,"sc":2,"sl":94}],"name":"RegularSchedule","sl":21}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_102":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":69},{"sl":74},{"sl":79}],"name":"testCurvesAndCalibration[LINEAR]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":71},{"sl":76},{"sl":81}]},"test_120":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testATMSwaptionCalibration","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_130":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaption","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_151":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testFRA[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_153":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testCapletSmile[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_154":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testZeroCMSSwap","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_156":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testCaplet[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_160":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testDigitalCaplet[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_164":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSingleCurveModel","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_172":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwap[SPOT]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_192":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":69},{"sl":74},{"sl":79}],"name":"testCurvesAndCalibration[HARMONIC_SPLINE_WITH_MONOTONIC_FILTERING]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":71},{"sl":76},{"sl":81}]},"test_209":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testFRA[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_214":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testCaplet[TERMINAL]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_218":{"methods":[{"sl":30},{"sl":34},{"sl":49},{"sl":59},{"sl":64},{"sl":69},{"sl":74},{"sl":79}],"name":"testCurvesAndCalibration[AKIMA_CONTINUOUS]","pass":true,"statements":[{"sl":31},{"sl":36},{"sl":51},{"sl":61},{"sl":66},{"sl":71},{"sl":76},{"sl":81}]},"test_220":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testCapletSmile[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_225":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaption[TERMINAL]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_242":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testFRA[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_249":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testCaplet[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_25":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testCap","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_252":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwap[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_257":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaptionCalibration[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_280":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaptionSmile[TERMINAL]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_295":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testCapletSmile","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_297":{"methods":[{"sl":30},{"sl":34},{"sl":49},{"sl":59},{"sl":64},{"sl":69},{"sl":74},{"sl":79}],"name":"testCurvesAndCalibration[LINEAR]","pass":true,"statements":[{"sl":31},{"sl":36},{"sl":51},{"sl":61},{"sl":66},{"sl":71},{"sl":76},{"sl":81}]},"test_298":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testATMSwaptionCalibration[Model: NORMAL, Calibration: MONTECARLO]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_305":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testCaplet[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_315":{"methods":[{"sl":30},{"sl":34},{"sl":49},{"sl":59},{"sl":64},{"sl":69},{"sl":74},{"sl":79}],"name":"testCurvesAndCalibration[HARMONIC_SPLINE_WITH_MONOTONIC_FILTERING]","pass":true,"statements":[{"sl":31},{"sl":36},{"sl":51},{"sl":61},{"sl":66},{"sl":71},{"sl":76},{"sl":81}]},"test_321":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaption[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_327":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testATMSwaptionCalibration[VOLATILITYNORMAL-STOCHASTIC_LEVENBERG_MARQUARDT-FINITE_DIFFERENCES]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_33":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaption[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_341":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testCaplet","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_346":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaptionCalibration[TERMINAL]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_350":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaptionSmile[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_362":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaption","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_375":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testCapletSmile[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_393":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaption[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_397":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testMultiCurveModel","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_400":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testCaplet[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_402":{"methods":[{"sl":30},{"sl":34},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testAgainstSwaption","pass":true,"statements":[{"sl":31},{"sl":36},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_432":{"methods":[{"sl":30},{"sl":34},{"sl":49},{"sl":59},{"sl":64},{"sl":69},{"sl":74},{"sl":79}],"name":"testCurvesAndCalibration[AKIMA]","pass":true,"statements":[{"sl":31},{"sl":36},{"sl":51},{"sl":61},{"sl":66},{"sl":71},{"sl":76},{"sl":81}]},"test_445":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaptionCalibration[SPOT]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_448":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testDigitalCaplet[SPOT]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_451":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testCapletSmile[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_462":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaptionSmile[SPOT]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_464":{"methods":[{"sl":30},{"sl":34},{"sl":49},{"sl":59},{"sl":64},{"sl":69},{"sl":74},{"sl":79}],"name":"testCurvesAndCalibration[CUBIC_SPLINE]","pass":true,"statements":[{"sl":31},{"sl":36},{"sl":51},{"sl":61},{"sl":66},{"sl":71},{"sl":76},{"sl":81}]},"test_467":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaptionCalibration[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_471":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaptionCalibration[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_489":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaptionCalibration[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_492":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testDigitalCaplet[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_509":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":69},{"sl":74},{"sl":79}],"name":"testCurvesAndCalibration[HARMONIC_SPLINE]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":71},{"sl":76},{"sl":81}]},"test_531":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testBermudanSwaption","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_545":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaption","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_553":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testDigitalCaplet[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_556":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaptionSmile[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_559":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaptionSmileCalibration","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_563":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwap[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_564":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwap[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_567":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testCaplet[SPOT]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_568":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testATMSwaptionCalibration[VOLATILITYNORMAL-STOCHASTIC_LEVENBERG_MARQUARDT-ADJOINT_AUTOMATIC_DIFFERENTIATION]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_569":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testCMSOption","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_570":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testFRA[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_572":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testATMSwaptionCalibration[Model: DISPLACED, Calibration: MONTECARLO]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_587":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testDigitalCaplet[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_590":{"methods":[{"sl":30},{"sl":34},{"sl":49},{"sl":59},{"sl":64},{"sl":69},{"sl":74},{"sl":79}],"name":"testCurvesAndCalibration[HARMONIC_SPLINE]","pass":true,"statements":[{"sl":31},{"sl":36},{"sl":51},{"sl":61},{"sl":66},{"sl":71},{"sl":76},{"sl":81}]},"test_599":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaption[SPOT]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_613":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaptionSmile[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_615":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwap[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_621":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testDigitalCaplet[TERMINAL]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_622":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaptionSmile[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_639":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testATMSwaptionCalibration[Model: NORMAL, Calibration: ANALYTIC]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_80":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwap[TERMINAL]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_98":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaption[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [98, 622, 570, 590, 509, 451, 298, 400, 350, 102, 564, 280, 156, 639, 553, 563, 397, 492, 341, 252, 545, 375, 209, 402, 556, 587, 467, 346, 567, 621, 362, 297, 249, 242, 464, 214, 225, 160, 33, 172, 615, 327, 151, 489, 559, 448, 572, 120, 192, 295, 218, 154, 393, 153, 568, 462, 305, 569, 445, 130, 220, 164, 321, 315, 80, 531, 613, 257, 432, 599, 471, 25], [98, 622, 570, 590, 509, 451, 298, 400, 350, 102, 564, 280, 156, 639, 553, 563, 397, 492, 341, 252, 545, 375, 209, 402, 556, 587, 467, 346, 567, 621, 362, 297, 249, 242, 464, 214, 225, 160, 33, 172, 615, 327, 151, 489, 559, 448, 572, 120, 192, 295, 218, 154, 393, 153, 568, 462, 305, 569, 445, 130, 220, 164, 321, 315, 80, 531, 613, 257, 432, 599, 471, 25], [], [], [590, 402, 297, 464, 218, 315, 432], [], [590, 402, 297, 464, 218, 315, 432], [], [], [], [], [], [], [], [], [], [], [], [], [98, 622, 570, 590, 509, 451, 298, 400, 350, 102, 564, 280, 156, 639, 553, 563, 397, 492, 341, 252, 545, 375, 209, 402, 556, 587, 467, 346, 567, 621, 362, 297, 249, 242, 464, 214, 225, 160, 33, 172, 615, 327, 151, 489, 559, 448, 572, 120, 192, 295, 218, 154, 393, 153, 568, 462, 305, 569, 445, 130, 220, 164, 321, 315, 80, 531, 613, 257, 432, 599, 471, 25], [], [98, 622, 570, 590, 509, 451, 298, 400, 350, 102, 564, 280, 156, 639, 553, 563, 397, 492, 341, 252, 545, 375, 209, 402, 556, 587, 467, 346, 567, 621, 362, 297, 249, 242, 464, 214, 225, 160, 33, 172, 615, 327, 151, 489, 559, 448, 572, 120, 192, 295, 218, 154, 393, 153, 568, 462, 305, 569, 445, 130, 220, 164, 321, 315, 80, 531, 613, 257, 432, 599, 471, 25], [], [], [], [], [], [], [], [98, 622, 570, 590, 509, 451, 298, 400, 350, 102, 564, 280, 156, 639, 553, 563, 397, 492, 341, 252, 545, 375, 209, 402, 556, 587, 467, 346, 567, 621, 362, 297, 249, 242, 464, 214, 225, 160, 33, 172, 615, 327, 151, 489, 559, 448, 572, 120, 192, 295, 218, 154, 393, 153, 568, 462, 305, 569, 445, 130, 220, 164, 321, 315, 80, 531, 613, 257, 432, 599, 471, 25], [], [98, 622, 570, 590, 509, 451, 298, 400, 350, 102, 564, 280, 156, 639, 553, 563, 397, 492, 341, 252, 545, 375, 209, 402, 556, 587, 467, 346, 567, 621, 362, 297, 249, 242, 464, 214, 225, 160, 33, 172, 615, 327, 151, 489, 559, 448, 572, 120, 192, 295, 218, 154, 393, 153, 568, 462, 305, 569, 445, 130, 220, 164, 321, 315, 80, 531, 613, 257, 432, 599, 471, 25], [], [], [98, 622, 570, 590, 509, 451, 298, 400, 350, 102, 564, 280, 156, 639, 553, 563, 397, 492, 341, 252, 545, 375, 209, 402, 556, 587, 467, 346, 567, 621, 362, 297, 249, 242, 464, 214, 225, 160, 33, 172, 615, 327, 151, 489, 559, 448, 572, 120, 192, 295, 218, 154, 393, 153, 568, 462, 305, 569, 445, 130, 220, 164, 321, 315, 80, 531, 613, 257, 432, 599, 471, 25], [], [98, 622, 570, 590, 509, 451, 298, 400, 350, 102, 564, 280, 156, 639, 553, 563, 397, 492, 341, 252, 545, 375, 209, 402, 556, 587, 467, 346, 567, 621, 362, 297, 249, 242, 464, 214, 225, 160, 33, 172, 615, 327, 151, 489, 559, 448, 572, 120, 192, 295, 218, 154, 393, 153, 568, 462, 305, 569, 445, 130, 220, 164, 321, 315, 80, 531, 613, 257, 432, 599, 471, 25], [], [], [590, 509, 102, 297, 464, 192, 218, 315, 432], [], [590, 509, 102, 297, 464, 192, 218, 315, 432], [], [], [590, 509, 102, 297, 464, 192, 218, 315, 432], [], [590, 509, 102, 297, 464, 192, 218, 315, 432], [], [], [98, 622, 570, 590, 509, 451, 298, 400, 350, 102, 564, 280, 156, 639, 553, 563, 397, 492, 341, 252, 545, 375, 209, 402, 556, 587, 467, 346, 567, 621, 362, 297, 249, 242, 464, 214, 225, 160, 33, 172, 615, 327, 151, 489, 559, 448, 572, 120, 192, 295, 218, 154, 393, 153, 568, 462, 305, 569, 445, 130, 220, 164, 321, 315, 80, 531, 613, 257, 432, 599, 471, 25], [], [98, 622, 570, 590, 509, 451, 298, 400, 350, 102, 564, 280, 156, 639, 553, 563, 397, 492, 341, 252, 545, 375, 209, 402, 556, 587, 467, 346, 567, 621, 362, 297, 249, 242, 464, 214, 225, 160, 33, 172, 615, 327, 151, 489, 559, 448, 572, 120, 192, 295, 218, 154, 393, 153, 568, 462, 305, 569, 445, 130, 220, 164, 321, 315, 80, 531, 613, 257, 432, 599, 471, 25], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]