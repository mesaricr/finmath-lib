var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":74,"id":30445,"methods":[{"el":30,"sc":2,"sl":23},{"el":34,"sc":2,"sl":32},{"el":38,"sc":2,"sl":36},{"el":42,"sc":2,"sl":40},{"el":47,"sc":2,"sl":44},{"el":52,"sc":2,"sl":49},{"el":68,"sc":4,"sl":65},{"el":73,"sc":2,"sl":54}],"name":"OptimizerFactoryLevenbergMarquardt","sl":15}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_120":{"methods":[{"sl":23},{"sl":32},{"sl":36},{"sl":49},{"sl":54},{"sl":65}],"name":"testATMSwaptionCalibration","pass":true,"statements":[{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":33},{"sl":37},{"sl":51},{"sl":56},{"sl":67}]},"test_218":{"methods":[{"sl":23},{"sl":32},{"sl":36},{"sl":49},{"sl":54},{"sl":65}],"name":"testCurvesAndCalibration[AKIMA_CONTINUOUS]","pass":true,"statements":[{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":33},{"sl":37},{"sl":51},{"sl":56},{"sl":67}]},"test_254":{"methods":[{"sl":23},{"sl":32},{"sl":36},{"sl":40},{"sl":54},{"sl":65}],"name":"test","pass":true,"statements":[{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":33},{"sl":37},{"sl":41},{"sl":56},{"sl":67}]},"test_257":{"methods":[{"sl":23},{"sl":32},{"sl":36},{"sl":54},{"sl":65}],"name":"testSwaptionCalibration[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":33},{"sl":37},{"sl":56},{"sl":67}]},"test_263":{"methods":[{"sl":23},{"sl":32},{"sl":36},{"sl":49},{"sl":54},{"sl":65}],"name":"testMultiCurveCalibration","pass":true,"statements":[{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":33},{"sl":37},{"sl":51},{"sl":56},{"sl":67}]},"test_276":{"methods":[{"sl":23},{"sl":32},{"sl":36},{"sl":49},{"sl":54},{"sl":65}],"name":"testBondNSSCurveCalibration","pass":true,"statements":[{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":33},{"sl":37},{"sl":51},{"sl":56},{"sl":67}]},"test_297":{"methods":[{"sl":23},{"sl":32},{"sl":36},{"sl":49},{"sl":54},{"sl":65}],"name":"testCurvesAndCalibration[LINEAR]","pass":true,"statements":[{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":33},{"sl":37},{"sl":51},{"sl":56},{"sl":67}]},"test_298":{"methods":[{"sl":23},{"sl":32},{"sl":36},{"sl":49},{"sl":54},{"sl":65}],"name":"testATMSwaptionCalibration[Model: NORMAL, Calibration: MONTECARLO]","pass":true,"statements":[{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":33},{"sl":37},{"sl":51},{"sl":56},{"sl":67}]},"test_315":{"methods":[{"sl":23},{"sl":32},{"sl":36},{"sl":49},{"sl":54},{"sl":65}],"name":"testCurvesAndCalibration[HARMONIC_SPLINE_WITH_MONOTONIC_FILTERING]","pass":true,"statements":[{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":33},{"sl":37},{"sl":51},{"sl":56},{"sl":67}]},"test_327":{"methods":[{"sl":23},{"sl":32},{"sl":36},{"sl":49},{"sl":54},{"sl":65}],"name":"testATMSwaptionCalibration[VOLATILITYNORMAL-STOCHASTIC_LEVENBERG_MARQUARDT-FINITE_DIFFERENCES]","pass":true,"statements":[{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":33},{"sl":37},{"sl":51},{"sl":56},{"sl":67}]},"test_346":{"methods":[{"sl":23},{"sl":32},{"sl":36},{"sl":54},{"sl":65}],"name":"testSwaptionCalibration[TERMINAL]","pass":true,"statements":[{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":33},{"sl":37},{"sl":56},{"sl":67}]},"test_374":{"methods":[{"sl":23},{"sl":32},{"sl":36},{"sl":49},{"sl":54},{"sl":65}],"name":"testCDS","pass":true,"statements":[{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":33},{"sl":37},{"sl":51},{"sl":56},{"sl":67}]},"test_387":{"methods":[{"sl":23},{"sl":32},{"sl":36},{"sl":49},{"sl":54},{"sl":65}],"name":"testCalibration","pass":true,"statements":[{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":33},{"sl":37},{"sl":51},{"sl":56},{"sl":67}]},"test_428":{"methods":[{"sl":23},{"sl":32},{"sl":36},{"sl":49},{"sl":54},{"sl":65}],"name":"testVolatilityCalibration[VOLATILITYLOGNORMAL]","pass":true,"statements":[{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":33},{"sl":37},{"sl":51},{"sl":56},{"sl":67}]},"test_432":{"methods":[{"sl":23},{"sl":32},{"sl":36},{"sl":49},{"sl":54},{"sl":65}],"name":"testCurvesAndCalibration[AKIMA]","pass":true,"statements":[{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":33},{"sl":37},{"sl":51},{"sl":56},{"sl":67}]},"test_435":{"methods":[{"sl":23},{"sl":32},{"sl":36},{"sl":49},{"sl":54},{"sl":65}],"name":"testVolatilityCalibration[VOLATILITYNORMAL]","pass":true,"statements":[{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":33},{"sl":37},{"sl":51},{"sl":56},{"sl":67}]},"test_445":{"methods":[{"sl":23},{"sl":32},{"sl":36},{"sl":54},{"sl":65}],"name":"testSwaptionCalibration[SPOT]","pass":true,"statements":[{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":33},{"sl":37},{"sl":56},{"sl":67}]},"test_464":{"methods":[{"sl":23},{"sl":32},{"sl":36},{"sl":49},{"sl":54},{"sl":65}],"name":"testCurvesAndCalibration[CUBIC_SPLINE]","pass":true,"statements":[{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":33},{"sl":37},{"sl":51},{"sl":56},{"sl":67}]},"test_467":{"methods":[{"sl":23},{"sl":32},{"sl":36},{"sl":54},{"sl":65}],"name":"testSwaptionCalibration[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":33},{"sl":37},{"sl":56},{"sl":67}]},"test_471":{"methods":[{"sl":23},{"sl":32},{"sl":36},{"sl":54},{"sl":65}],"name":"testSwaptionCalibration[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":33},{"sl":37},{"sl":56},{"sl":67}]},"test_489":{"methods":[{"sl":23},{"sl":32},{"sl":36},{"sl":54},{"sl":65}],"name":"testSwaptionCalibration[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":33},{"sl":37},{"sl":56},{"sl":67}]},"test_559":{"methods":[{"sl":23},{"sl":32},{"sl":36},{"sl":54},{"sl":65}],"name":"testSwaptionSmileCalibration","pass":true,"statements":[{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":33},{"sl":37},{"sl":56},{"sl":67}]},"test_568":{"methods":[{"sl":23},{"sl":32},{"sl":36},{"sl":49},{"sl":54},{"sl":65}],"name":"testATMSwaptionCalibration[VOLATILITYNORMAL-STOCHASTIC_LEVENBERG_MARQUARDT-ADJOINT_AUTOMATIC_DIFFERENTIATION]","pass":true,"statements":[{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":33},{"sl":37},{"sl":51},{"sl":56},{"sl":67}]},"test_572":{"methods":[{"sl":23},{"sl":32},{"sl":36},{"sl":49},{"sl":54},{"sl":65}],"name":"testATMSwaptionCalibration[Model: DISPLACED, Calibration: MONTECARLO]","pass":true,"statements":[{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":33},{"sl":37},{"sl":51},{"sl":56},{"sl":67}]},"test_574":{"methods":[{"sl":23},{"sl":32},{"sl":36},{"sl":40},{"sl":54},{"sl":65}],"name":"test","pass":true,"statements":[{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":33},{"sl":37},{"sl":41},{"sl":56},{"sl":67}]},"test_590":{"methods":[{"sl":23},{"sl":32},{"sl":36},{"sl":49},{"sl":54},{"sl":65}],"name":"testCurvesAndCalibration[HARMONIC_SPLINE]","pass":true,"statements":[{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":33},{"sl":37},{"sl":51},{"sl":56},{"sl":67}]},"test_639":{"methods":[{"sl":23},{"sl":32},{"sl":36},{"sl":49},{"sl":54},{"sl":65}],"name":"testATMSwaptionCalibration[Model: NORMAL, Calibration: ANALYTIC]","pass":true,"statements":[{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":33},{"sl":37},{"sl":51},{"sl":56},{"sl":67}]},"test_89":{"methods":[{"sl":23},{"sl":32},{"sl":36},{"sl":40},{"sl":54},{"sl":65}],"name":"testRosenbrockFunctionWithLevenbergMarquard","pass":true,"statements":[{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":33},{"sl":37},{"sl":41},{"sl":56},{"sl":67}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [254, 435, 590, 327, 489, 559, 568, 467, 572, 346, 574, 387, 298, 428, 445, 89, 263, 120, 297, 374, 315, 276, 639, 464, 218, 257, 432, 471], [254, 435, 590, 327, 489, 559, 568, 467, 572, 346, 574, 387, 298, 428, 445, 89, 263, 120, 297, 374, 315, 276, 639, 464, 218, 257, 432, 471], [254, 435, 590, 327, 489, 559, 568, 467, 572, 346, 574, 387, 298, 428, 445, 89, 263, 120, 297, 374, 315, 276, 639, 464, 218, 257, 432, 471], [254, 435, 590, 327, 489, 559, 568, 467, 572, 346, 574, 387, 298, 428, 445, 89, 263, 120, 297, 374, 315, 276, 639, 464, 218, 257, 432, 471], [254, 435, 590, 327, 489, 559, 568, 467, 572, 346, 574, 387, 298, 428, 445, 89, 263, 120, 297, 374, 315, 276, 639, 464, 218, 257, 432, 471], [254, 435, 590, 327, 489, 559, 568, 467, 572, 346, 574, 387, 298, 428, 445, 89, 263, 120, 297, 374, 315, 276, 639, 464, 218, 257, 432, 471], [254, 435, 590, 327, 489, 559, 568, 467, 572, 346, 574, 387, 298, 428, 445, 89, 263, 120, 297, 374, 315, 276, 639, 464, 218, 257, 432, 471], [], [], [254, 435, 590, 327, 489, 559, 568, 467, 572, 346, 574, 387, 298, 428, 445, 89, 263, 120, 297, 374, 315, 276, 639, 464, 218, 257, 432, 471], [254, 435, 590, 327, 489, 559, 568, 467, 572, 346, 574, 387, 298, 428, 445, 89, 263, 120, 297, 374, 315, 276, 639, 464, 218, 257, 432, 471], [], [], [254, 435, 590, 327, 489, 559, 568, 467, 572, 346, 574, 387, 298, 428, 445, 89, 263, 120, 297, 374, 315, 276, 639, 464, 218, 257, 432, 471], [254, 435, 590, 327, 489, 559, 568, 467, 572, 346, 574, 387, 298, 428, 445, 89, 263, 120, 297, 374, 315, 276, 639, 464, 218, 257, 432, 471], [], [], [254, 574, 89], [254, 574, 89], [], [], [], [], [], [], [], [435, 590, 327, 568, 572, 387, 298, 428, 263, 120, 297, 374, 315, 276, 639, 464, 218, 432], [], [435, 590, 327, 568, 572, 387, 298, 428, 263, 120, 297, 374, 315, 276, 639, 464, 218, 432], [], [], [254, 435, 590, 327, 489, 559, 568, 467, 572, 346, 574, 387, 298, 428, 445, 89, 263, 120, 297, 374, 315, 276, 639, 464, 218, 257, 432, 471], [], [254, 435, 590, 327, 489, 559, 568, 467, 572, 346, 574, 387, 298, 428, 445, 89, 263, 120, 297, 374, 315, 276, 639, 464, 218, 257, 432, 471], [], [], [], [], [], [], [], [], [254, 435, 590, 327, 489, 559, 568, 467, 572, 346, 574, 387, 298, 428, 445, 89, 263, 120, 297, 374, 315, 276, 639, 464, 218, 257, 432, 471], [], [254, 435, 590, 327, 489, 559, 568, 467, 572, 346, 574, 387, 298, 428, 445, 89, 263, 120, 297, 374, 315, 276, 639, 464, 218, 257, 432, 471], [], [], [], [], [], [], []]