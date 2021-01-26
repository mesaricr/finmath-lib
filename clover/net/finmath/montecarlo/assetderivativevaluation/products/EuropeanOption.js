var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":145,"id":15796,"methods":[{"el":52,"sc":2,"sl":46},{"el":66,"sc":2,"sl":60},{"el":75,"sc":2,"sl":73},{"el":108,"sc":2,"sl":87},{"el":122,"sc":2,"sl":110},{"el":128,"sc":2,"sl":124},{"el":132,"sc":2,"sl":130},{"el":136,"sc":2,"sl":134},{"el":140,"sc":2,"sl":138},{"el":144,"sc":2,"sl":142}],"name":"EuropeanOption","sl":33}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_112":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"test","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_129":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testHedgePerformance","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_137":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanAsianBermudanOption[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_141":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCall[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_145":{"methods":[{"sl":87}],"name":"testProductAADSensitivities[0]","pass":true,"statements":[{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_146":{"methods":[{"sl":87}],"name":"testHedgePerformance[MonteCarloAssetModel [model=BlackScholesModel [initialValue=RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@2de23121,\n ID=0], riskFreeRate=RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@63475ace,\n ID=1], volatility=RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@4988d8b8,\n ID=2], abstractRandomVariableFactory=RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.0, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=false, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]], initialState=[RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@c0c2f8d,\n ID=3]], drift=[RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@305b7c14,\n ID=6]], factorLoadings=[RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@4988d8b8,\n ID=2]]]]-EuropeanOption [maturity=5.0, strike=1.2840254166877414, underlyingIndex=0, nameOfUnderliyng=null]]","pass":true,"statements":[{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_168":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallDelta[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_169":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testProductImplementation[displacement=0.05]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_176":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallVega[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_201":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testProductImplementation[displacement=0]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_206":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"test[RandomVariableDifferentiableAADFactory TestFunctionMonteCarloEuropeanOption(1,3,1,1)]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_21":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallVega[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_212":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCall[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_216":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallVega[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_217":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallDelta[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_22":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testProductAADSensitivities","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_231":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testProductImplementation[displacement=0.01]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_243":{"methods":[{"sl":46},{"sl":87},{"sl":110}],"name":"test","pass":true,"statements":[{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107},{"sl":112},{"sl":114},{"sl":115},{"sl":116},{"sl":121}]},"test_253":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"test[RandomVariableFromArrayFactory TestFunctionMonteCarloEuropeanOption(1,3,1,1)]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_261":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallVega[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_296":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallDelta","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_302":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCall","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_304":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"test","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_324":{"methods":[{"sl":46},{"sl":87},{"sl":110}],"name":"test","pass":true,"statements":[{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107},{"sl":112},{"sl":114},{"sl":115},{"sl":116},{"sl":121}]},"test_325":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"test","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_344":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"test","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_352":{"methods":[{"sl":46},{"sl":87},{"sl":110}],"name":"test","pass":true,"statements":[{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107},{"sl":112},{"sl":114},{"sl":115},{"sl":116},{"sl":121}]},"test_353":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallDelta[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_357":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCall[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_373":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallVega[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_4":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallDelta[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_434":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testProductImplementation","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_436":{"methods":[{"sl":46},{"sl":87},{"sl":110}],"name":"test","pass":true,"statements":[{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107},{"sl":112},{"sl":114},{"sl":115},{"sl":116},{"sl":121}]},"test_444":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallDelta[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_447":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"test","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_469":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCall[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_470":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanAsianBermudanOption[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_475":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"test","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_478":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallDelta[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_521":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCall[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_524":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCall[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_533":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallDelta[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_546":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallVega[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_548":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"test[xi=0.5}]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_551":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallDelta[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_565":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallVega[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_581":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallVega","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_584":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCall[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_595":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallVega[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_597":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCall[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_608":{"methods":[{"sl":60},{"sl":87}],"name":"test","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_638":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"test[xi=0}]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_83":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanAsianBermudanOption[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_95":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanAsianBermudanOption[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [352, 436, 243, 324], [352, 436, 243, 324], [352, 436, 243, 324], [352, 436, 243, 324], [352, 436, 243, 324], [352, 436, 243, 324], [], [], [], [], [], [], [], [], [444, 212, 608, 478, 447, 137, 83, 4, 373, 112, 469, 141, 548, 325, 524, 357, 595, 176, 344, 302, 217, 533, 22, 597, 168, 638, 206, 231, 129, 216, 201, 475, 296, 353, 581, 584, 304, 21, 261, 521, 169, 470, 551, 95, 253, 434, 565, 546], [444, 212, 608, 478, 447, 137, 83, 4, 373, 112, 469, 141, 548, 325, 524, 357, 595, 176, 344, 302, 217, 533, 22, 597, 168, 638, 206, 231, 129, 216, 201, 475, 296, 353, 581, 584, 304, 21, 261, 521, 169, 470, 551, 95, 253, 434, 565, 546], [444, 212, 608, 478, 447, 137, 83, 4, 373, 112, 469, 141, 548, 325, 524, 357, 595, 176, 344, 302, 217, 533, 22, 597, 168, 638, 206, 231, 129, 216, 201, 475, 296, 353, 581, 584, 304, 21, 261, 521, 169, 470, 551, 95, 253, 434, 565, 546], [444, 212, 608, 478, 447, 137, 83, 4, 373, 112, 469, 141, 548, 325, 524, 357, 595, 176, 344, 302, 217, 533, 22, 597, 168, 638, 206, 231, 129, 216, 201, 475, 296, 353, 581, 584, 304, 21, 261, 521, 169, 470, 551, 95, 253, 434, 565, 546], [444, 212, 608, 478, 447, 137, 83, 4, 373, 112, 469, 141, 548, 325, 524, 357, 595, 176, 344, 302, 217, 533, 22, 597, 168, 638, 206, 231, 129, 216, 201, 475, 296, 353, 581, 584, 304, 21, 261, 521, 169, 470, 551, 95, 253, 434, 565, 546], [444, 212, 608, 478, 447, 137, 83, 4, 373, 112, 469, 141, 548, 325, 524, 357, 595, 176, 344, 302, 217, 533, 22, 597, 168, 638, 206, 231, 129, 216, 201, 475, 296, 353, 581, 584, 304, 21, 261, 521, 169, 470, 551, 95, 253, 434, 565, 546], [], [], [], [], [], [], [], [444, 212, 478, 447, 137, 83, 4, 373, 112, 469, 141, 548, 325, 524, 357, 595, 176, 344, 302, 217, 533, 22, 597, 168, 638, 206, 231, 129, 216, 201, 475, 296, 353, 581, 584, 304, 21, 261, 521, 169, 470, 551, 95, 253, 434, 565, 546], [444, 212, 478, 447, 137, 83, 4, 373, 112, 469, 141, 548, 325, 524, 357, 595, 176, 344, 302, 217, 533, 22, 597, 168, 638, 206, 231, 129, 216, 201, 475, 296, 353, 581, 584, 304, 21, 261, 521, 169, 470, 551, 95, 253, 434, 565, 546], [], [], [], [], [], [], [], [], [], [], [], [], [444, 212, 608, 478, 447, 137, 83, 4, 373, 112, 469, 141, 548, 325, 524, 357, 595, 176, 344, 302, 217, 533, 22, 597, 168, 638, 206, 231, 146, 129, 216, 201, 475, 296, 353, 581, 584, 304, 21, 352, 261, 521, 436, 243, 169, 470, 551, 324, 95, 253, 145, 434, 565, 546], [], [], [], [], [444, 212, 608, 478, 447, 137, 83, 4, 373, 112, 469, 141, 548, 325, 524, 357, 595, 176, 344, 302, 217, 533, 22, 597, 168, 638, 206, 231, 146, 129, 216, 201, 475, 296, 353, 581, 584, 304, 21, 352, 261, 521, 436, 243, 169, 470, 551, 324, 95, 253, 145, 434, 565, 546], [], [], [444, 212, 608, 478, 447, 137, 83, 4, 373, 112, 469, 141, 548, 325, 524, 357, 595, 176, 344, 302, 217, 533, 22, 597, 168, 638, 206, 231, 146, 129, 216, 201, 475, 296, 353, 581, 584, 304, 21, 352, 261, 521, 436, 243, 169, 470, 551, 324, 95, 253, 145, 434, 565, 546], [], [], [444, 212, 608, 478, 447, 137, 83, 4, 373, 112, 469, 141, 548, 325, 524, 357, 595, 176, 344, 302, 217, 533, 22, 597, 168, 638, 206, 231, 146, 129, 216, 201, 475, 296, 353, 581, 584, 304, 21, 352, 261, 521, 436, 243, 169, 470, 551, 324, 95, 253, 145, 434, 565, 546], [444, 212, 608, 478, 447, 137, 83, 4, 373, 112, 469, 141, 548, 325, 524, 357, 595, 176, 344, 302, 217, 533, 22, 597, 168, 638, 206, 231, 146, 129, 216, 201, 475, 296, 353, 581, 584, 304, 21, 352, 261, 521, 436, 243, 169, 470, 551, 324, 95, 253, 145, 434, 565, 546], [444, 212, 608, 478, 447, 137, 83, 4, 373, 112, 469, 141, 548, 325, 524, 357, 595, 176, 344, 302, 217, 533, 22, 597, 168, 638, 206, 231, 146, 129, 216, 201, 475, 296, 353, 581, 584, 304, 21, 352, 261, 521, 436, 243, 169, 470, 551, 324, 95, 253, 145, 434, 565, 546], [], [], [444, 212, 608, 478, 447, 137, 83, 4, 373, 112, 469, 141, 548, 325, 524, 357, 595, 176, 344, 302, 217, 533, 22, 597, 168, 638, 206, 231, 146, 129, 216, 201, 475, 296, 353, 581, 584, 304, 21, 352, 261, 521, 436, 243, 169, 470, 551, 324, 95, 253, 145, 434, 565, 546], [444, 212, 608, 478, 447, 137, 83, 4, 373, 112, 469, 141, 548, 325, 524, 357, 595, 176, 344, 302, 217, 533, 22, 597, 168, 638, 206, 231, 146, 129, 216, 201, 475, 296, 353, 581, 584, 304, 21, 352, 261, 521, 436, 243, 169, 470, 551, 324, 95, 253, 145, 434, 565, 546], [444, 212, 608, 478, 447, 137, 83, 4, 373, 112, 469, 141, 548, 325, 524, 357, 595, 176, 344, 302, 217, 533, 22, 597, 168, 638, 206, 231, 146, 129, 216, 201, 475, 296, 353, 581, 584, 304, 21, 352, 261, 521, 436, 243, 169, 470, 551, 324, 95, 253, 145, 434, 565, 546], [], [444, 212, 608, 478, 447, 137, 83, 4, 373, 112, 469, 141, 548, 325, 524, 357, 595, 176, 344, 302, 217, 533, 22, 597, 168, 638, 206, 231, 146, 129, 216, 201, 475, 296, 353, 581, 584, 304, 21, 352, 261, 521, 436, 243, 169, 470, 551, 324, 95, 253, 145, 434, 565, 546], [], [], [352, 436, 243, 324], [], [352, 436, 243, 324], [], [352, 436, 243, 324], [352, 436, 243, 324], [352, 436, 243, 324], [], [], [], [], [352, 436, 243, 324], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]