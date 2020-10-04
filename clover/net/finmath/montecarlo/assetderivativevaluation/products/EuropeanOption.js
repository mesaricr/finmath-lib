var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":145,"id":15737,"methods":[{"el":52,"sc":2,"sl":46},{"el":66,"sc":2,"sl":60},{"el":75,"sc":2,"sl":73},{"el":108,"sc":2,"sl":87},{"el":122,"sc":2,"sl":110},{"el":128,"sc":2,"sl":124},{"el":132,"sc":2,"sl":130},{"el":136,"sc":2,"sl":134},{"el":140,"sc":2,"sl":138},{"el":144,"sc":2,"sl":142}],"name":"EuropeanOption","sl":33}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_101":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanAsianBermudanOption[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_105":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCall[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_117":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallDelta[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_146":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testHedgePerformance","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_147":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCall[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_158":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallVega[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_163":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCall[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_197":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallVega","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_204":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"test[RandomVariableDifferentiableAADFactory TestFunctionMonteCarloEuropeanOption(1,3,1,1)]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_21":{"methods":[{"sl":87}],"name":"testHedgePerformance[MonteCarloAssetModel [model=BlackScholesModel [initialValue=RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@2de23121,\n ID=0], riskFreeRate=RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@63475ace,\n ID=1], volatility=RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@4988d8b8,\n ID=2], abstractRandomVariableFactory=RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.0, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=false, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]], initialState=[RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@c0c2f8d,\n ID=3]], drift=[RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@305b7c14,\n ID=6]], factorLoadings=[RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@4988d8b8,\n ID=2]]]]-EuropeanOption [maturity=5.0, strike=1.2840254166877414, underlyingIndex=0, nameOfUnderliyng=null]]","pass":true,"statements":[{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_218":{"methods":[{"sl":46},{"sl":87},{"sl":110}],"name":"test","pass":true,"statements":[{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107},{"sl":112},{"sl":114},{"sl":115},{"sl":116},{"sl":121}]},"test_261":{"methods":[{"sl":87}],"name":"testProductAADSensitivities[0]","pass":true,"statements":[{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_265":{"methods":[{"sl":46},{"sl":87},{"sl":110}],"name":"test","pass":true,"statements":[{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107},{"sl":112},{"sl":114},{"sl":115},{"sl":116},{"sl":121}]},"test_270":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testProductAADSensitivities","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_29":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallDelta","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_290":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallDelta[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_30":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallVega[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_318":{"methods":[{"sl":60},{"sl":87}],"name":"test","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_319":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanAsianBermudanOption[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_353":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"test","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_365":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"test","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_367":{"methods":[{"sl":46},{"sl":87},{"sl":110}],"name":"test","pass":true,"statements":[{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107},{"sl":112},{"sl":114},{"sl":115},{"sl":116},{"sl":121}]},"test_376":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanAsianBermudanOption[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_377":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCall","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_39":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"test[xi=0}]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_392":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallDelta[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_396":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"test[xi=0.5}]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_411":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallVega[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_454":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"test","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_461":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallVega[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_468":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallVega[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_47":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testProductImplementation[displacement=0.05]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_470":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCall[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_514":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallVega[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_518":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testProductImplementation","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_519":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallVega[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_532":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallDelta[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_546":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallDelta[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_548":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanAsianBermudanOption[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_555":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCall[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_558":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"test","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_572":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"test","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_591":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCall[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_6":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallDelta[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_601":{"methods":[{"sl":46},{"sl":87},{"sl":110}],"name":"test","pass":true,"statements":[{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107},{"sl":112},{"sl":114},{"sl":115},{"sl":116},{"sl":121}]},"test_630":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallDelta[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_632":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallDelta[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_68":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"test","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_73":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"test[RandomVariableFromArrayFactory TestFunctionMonteCarloEuropeanOption(1,3,1,1)]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_78":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testProductImplementation[displacement=0]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_82":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallVega[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_88":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCall[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_89":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testProductImplementation[displacement=0.01]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_94":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCall[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [218, 367, 601, 265], [218, 367, 601, 265], [218, 367, 601, 265], [218, 367, 601, 265], [218, 367, 601, 265], [218, 367, 601, 265], [], [], [], [], [], [], [], [], [630, 68, 88, 73, 632, 158, 548, 555, 461, 78, 204, 39, 82, 101, 411, 558, 94, 30, 197, 270, 377, 518, 89, 470, 392, 318, 532, 546, 117, 519, 591, 29, 319, 6, 396, 468, 105, 147, 146, 376, 514, 365, 353, 47, 572, 454, 163, 290], [630, 68, 88, 73, 632, 158, 548, 555, 461, 78, 204, 39, 82, 101, 411, 558, 94, 30, 197, 270, 377, 518, 89, 470, 392, 318, 532, 546, 117, 519, 591, 29, 319, 6, 396, 468, 105, 147, 146, 376, 514, 365, 353, 47, 572, 454, 163, 290], [630, 68, 88, 73, 632, 158, 548, 555, 461, 78, 204, 39, 82, 101, 411, 558, 94, 30, 197, 270, 377, 518, 89, 470, 392, 318, 532, 546, 117, 519, 591, 29, 319, 6, 396, 468, 105, 147, 146, 376, 514, 365, 353, 47, 572, 454, 163, 290], [630, 68, 88, 73, 632, 158, 548, 555, 461, 78, 204, 39, 82, 101, 411, 558, 94, 30, 197, 270, 377, 518, 89, 470, 392, 318, 532, 546, 117, 519, 591, 29, 319, 6, 396, 468, 105, 147, 146, 376, 514, 365, 353, 47, 572, 454, 163, 290], [630, 68, 88, 73, 632, 158, 548, 555, 461, 78, 204, 39, 82, 101, 411, 558, 94, 30, 197, 270, 377, 518, 89, 470, 392, 318, 532, 546, 117, 519, 591, 29, 319, 6, 396, 468, 105, 147, 146, 376, 514, 365, 353, 47, 572, 454, 163, 290], [630, 68, 88, 73, 632, 158, 548, 555, 461, 78, 204, 39, 82, 101, 411, 558, 94, 30, 197, 270, 377, 518, 89, 470, 392, 318, 532, 546, 117, 519, 591, 29, 319, 6, 396, 468, 105, 147, 146, 376, 514, 365, 353, 47, 572, 454, 163, 290], [], [], [], [], [], [], [], [630, 68, 88, 73, 632, 158, 548, 555, 461, 78, 204, 39, 82, 101, 411, 558, 94, 30, 197, 270, 377, 518, 89, 470, 392, 532, 546, 117, 519, 591, 29, 319, 6, 396, 468, 105, 147, 146, 376, 514, 365, 353, 47, 572, 454, 163, 290], [630, 68, 88, 73, 632, 158, 548, 555, 461, 78, 204, 39, 82, 101, 411, 558, 94, 30, 197, 270, 377, 518, 89, 470, 392, 532, 546, 117, 519, 591, 29, 319, 6, 396, 468, 105, 147, 146, 376, 514, 365, 353, 47, 572, 454, 163, 290], [], [], [], [], [], [], [], [], [], [], [], [], [630, 68, 88, 73, 632, 158, 548, 555, 461, 78, 204, 39, 82, 101, 21, 411, 218, 558, 94, 30, 367, 197, 270, 377, 518, 89, 470, 392, 318, 532, 546, 117, 519, 601, 591, 29, 319, 6, 396, 468, 105, 147, 146, 376, 514, 365, 353, 47, 261, 572, 265, 454, 163, 290], [], [], [], [], [630, 68, 88, 73, 632, 158, 548, 555, 461, 78, 204, 39, 82, 101, 21, 411, 218, 558, 94, 30, 367, 197, 270, 377, 518, 89, 470, 392, 318, 532, 546, 117, 519, 601, 591, 29, 319, 6, 396, 468, 105, 147, 146, 376, 514, 365, 353, 47, 261, 572, 265, 454, 163, 290], [], [], [630, 68, 88, 73, 632, 158, 548, 555, 461, 78, 204, 39, 82, 101, 21, 411, 218, 558, 94, 30, 367, 197, 270, 377, 518, 89, 470, 392, 318, 532, 546, 117, 519, 601, 591, 29, 319, 6, 396, 468, 105, 147, 146, 376, 514, 365, 353, 47, 261, 572, 265, 454, 163, 290], [], [], [630, 68, 88, 73, 632, 158, 548, 555, 461, 78, 204, 39, 82, 101, 21, 411, 218, 558, 94, 30, 367, 197, 270, 377, 518, 89, 470, 392, 318, 532, 546, 117, 519, 601, 591, 29, 319, 6, 396, 468, 105, 147, 146, 376, 514, 365, 353, 47, 261, 572, 265, 454, 163, 290], [630, 68, 88, 73, 632, 158, 548, 555, 461, 78, 204, 39, 82, 101, 21, 411, 218, 558, 94, 30, 367, 197, 270, 377, 518, 89, 470, 392, 318, 532, 546, 117, 519, 601, 591, 29, 319, 6, 396, 468, 105, 147, 146, 376, 514, 365, 353, 47, 261, 572, 265, 454, 163, 290], [630, 68, 88, 73, 632, 158, 548, 555, 461, 78, 204, 39, 82, 101, 21, 411, 218, 558, 94, 30, 367, 197, 270, 377, 518, 89, 470, 392, 318, 532, 546, 117, 519, 601, 591, 29, 319, 6, 396, 468, 105, 147, 146, 376, 514, 365, 353, 47, 261, 572, 265, 454, 163, 290], [], [], [630, 68, 88, 73, 632, 158, 548, 555, 461, 78, 204, 39, 82, 101, 21, 411, 218, 558, 94, 30, 367, 197, 270, 377, 518, 89, 470, 392, 318, 532, 546, 117, 519, 601, 591, 29, 319, 6, 396, 468, 105, 147, 146, 376, 514, 365, 353, 47, 261, 572, 265, 454, 163, 290], [630, 68, 88, 73, 632, 158, 548, 555, 461, 78, 204, 39, 82, 101, 21, 411, 218, 558, 94, 30, 367, 197, 270, 377, 518, 89, 470, 392, 318, 532, 546, 117, 519, 601, 591, 29, 319, 6, 396, 468, 105, 147, 146, 376, 514, 365, 353, 47, 261, 572, 265, 454, 163, 290], [630, 68, 88, 73, 632, 158, 548, 555, 461, 78, 204, 39, 82, 101, 21, 411, 218, 558, 94, 30, 367, 197, 270, 377, 518, 89, 470, 392, 318, 532, 546, 117, 519, 601, 591, 29, 319, 6, 396, 468, 105, 147, 146, 376, 514, 365, 353, 47, 261, 572, 265, 454, 163, 290], [], [630, 68, 88, 73, 632, 158, 548, 555, 461, 78, 204, 39, 82, 101, 21, 411, 218, 558, 94, 30, 367, 197, 270, 377, 518, 89, 470, 392, 318, 532, 546, 117, 519, 601, 591, 29, 319, 6, 396, 468, 105, 147, 146, 376, 514, 365, 353, 47, 261, 572, 265, 454, 163, 290], [], [], [218, 367, 601, 265], [], [218, 367, 601, 265], [], [218, 367, 601, 265], [218, 367, 601, 265], [218, 367, 601, 265], [], [], [], [], [218, 367, 601, 265], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]