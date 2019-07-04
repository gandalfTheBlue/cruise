let mockData = {
	'genpro://getplugins': {
		data: {
			operators: [
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.io.csvreader.CSVReaderNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.io.csvwriter.CSVWriterNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.meta.looper.LoopStartCountNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.meta.looper.chunk.LoopStartChunkNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.meta.looper.columnlist3.ColumnListLoopStartNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.meta.looper.LoopEndNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.flowvariable.tablerowtovariable2.TableToVariableNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.switches.manualif.ManualIfNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.switches.endif.EndifNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.meta.looper.columnlist3.LoopEndJoinNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.io.listfiles2.ListFilesNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.meta.looper.group2.GroupLoopStartNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.meta.looper.group3.GroupLoopStartNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.flowvariable.tablecoltovariable2.TableColumnToVariableNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.io.modelobjectreader.ModelObjectReaderNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.io.modelobjectreader.ModelObjectWriterNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.datasource.operator.DataSourceReaderNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.datasource.operator.DataSourceWriterNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.datasource.operator.model.DataSourceReaderNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.datasource.operator.model.DataSourceWriterNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.layer.deepbelief.rbm.RBMLayerNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.layer.init.DL4JModelInitNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.layer.mlp.dense.DenseLayerNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.layer.convolutional.subsampling.PoolingLayerNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.layer.convolutional.convolution.ConvolutionLayerNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.learn.feedforward.FeedforwardLearnerNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.io.writer.Dl4JModelWriterNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.io.reader.dl4jmodel.Dl4JModelReaderNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.predict.feedforward.FeedforwardPredictorNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.layer.convolutional.lrn.LRNLayerNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.layer.autoencoder.AutoEncoderLayerNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.learn.feedforward.regression.FeedforwardRegressionLearnerNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.learn.feedforward.classification.FeedforwardClassificationLearnerNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.learn.feedforward.pretraining.FeedforwardPretrainingLearnerNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.predict.feedforward.classification.FeedforwardClassificationPredictorNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.predict.feedforward.regression.FeedforwardRegressionPredictorNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.predict.feedforward.layer.FeedforwardLayerPredictorNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.sun.nodes.script.JavaScriptingNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.sun.nodes.script.node.rowfilter.JavaRowFilterNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.sun.nodes.script.node.rowsplitter.JavaRowSplitterNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.sun.nodes.script.node.editvar.JavaEditVariableNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.sun.nodes.script.node.ifswitch.JavaIfSwitchNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.svg.node.sparklines.SparkLineNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.svg.node.radarplot.RadarplotAppenderFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.renderer2image.Renderer2ImageNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.image.readimage.ReadImageFromUrlNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.preproc.colconvert.stringtosvg.StringToSvgNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.basic.add.AddNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.booltoint.BoolToIntNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.columnelection.DataColumnSpecFilterNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.basic.collectdata.CollectDataNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.basic.datafilter.DataFilterNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.basic.datageneration.DataGenerationNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.basic.datamerge.DataMergeNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.basic.datasplit.DataSplitNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.basic.divide.DivideNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.basic.exponent.ExponentNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.group.GroupNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.basic.logarithm.LogarithmNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.basic.logicaland.AndNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.basic.logicalnot.NotNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.basic.logicalor.OrNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.matrixdotproduct.MatrixDotProductNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.matrixeig.MatrixEigNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.matrixmultiplication.MatrixMultiplicationNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.matrixtranspose.TransposeTableNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.basic.power.PowerNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.basic.reshape.ReshapeNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.rowselection.RowFilterNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.basic.subtract.SubtractNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.bearingdiagnosis.bearingfaultfrequency.BearingFaultFrequencyNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.bearingdiagnosis.extractfrequencycomponent.ExtractFrequencyComponentNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.bearingdiagnosis.harmonic.noise.ratio.HarmonicNoiseRatioNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.classification.ann.AnnNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.classification.predict.ClassificationPredictNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.classification.train.ClassificationTrainNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.classification.decisiontreeclassifier.DecisionTreeClassifierNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.classification.logisticregression.LogisticRegressionNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.classification.randomforest.RandomForestNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.classification.svc.SVCNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.clustering.predict.ClusterPredictNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.clustering.train.ClusterTrainNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.datapreprocess.normalizationfit.NormalizationFitNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.clustering.gmm.GMMClusteringNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.dataattributesupervision.correlation.CorrelationNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.dataattributesupervision.dtw.DTWNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.datamining.apriori.AprioriNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.datapreprocess.datadiscretizationfit.DataDiscretizationFitNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.datapreprocess.data.discretization.transform.DataDiscretizationTransformNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.datapreprocess.interpolation.Predict.InterpolationPredictNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.datapreprocess.interpolation.Train.InterpolationTrainNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.datapreprocess.normalizationtransform.NormalizationTransformNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.datapreprocess.com.cyberinsight.cps.genpro.operator.datapreprocess.tlabeler.TlabelerNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.dataqualitycheck.derivativecheck.DerivativeCheckNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.dataqualitycheck.distributioncheck.DistributionCheckNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.dataqualitycheck.energycheck.EnergyCheckNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.dataqualitycheck.meancheck.MeanValueCheckNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.dataqualitycheck.npointcheck.NPointCheckNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.dataqualitycheck.posnegcheck.PosnegCheckNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.dataqualitycheck.rmscheck.RmsCheckNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.dataqualitycheck.upointcheck.UPointCheckNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.datapreprocess.outlierdetect.OutlierDetectNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.datapreprocess.smoothlowess.SmoothLowessNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.datapreprocess.smoothsavizky.SmoothSavizkyNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.datapreprocess.smote.SmoteNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.datapreprocess.sort.SortNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.arps.ARPSNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.cpw.CPWNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.cwt.CwtNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.doublespectrum.DoubleSpectrumNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.dwt.DWTNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.ecdf.EmpiricalCumulativeDistributionNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.emd.EmdNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.envspec.EnvelopeSpectrumNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.envelop.demodulation.EnvelopDemodulationNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.fft.FFTNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.fishercriterion.FisherCriterionNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.hilbert.HilbertNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.ips.IPSNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.isomap.ISOMAPNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.kurtogram.KurtogramNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.kurtosis.KurtosisNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.max.MaxNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.mean.MeanNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.min.MinNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.moving.window.feature.extraction.MovingWindowFeatureExtractionNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.orderspectrum.OrderSpectrumNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.order.tracking.OrderTrackingNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.pcapredict.PcaPredictNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.pcatrain.PcaTrainNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.peaktopeak.PeaktopeakNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.psd.PSDNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.rms.RMSNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.skew.SkewnessNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.std.StandardDeviationNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.stft.STFTNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.tsa.TSANodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.variance.VarianceNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.wienerfilter.WienerFilterNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.wvd.WvdNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.healthassessment.aakrpredict.AAKRPredictNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.healthassessment.aakrtrain.AakrTrainNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.healthassessment.gmmpfit.GmmpFitNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.healthassessment.gmmppredict.GmmpPredictNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.healthassessment.aakrpredict.PCAMSPCPredictNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.healthassessment.pcamspctrain.PCAMSPCTrainNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.healthassessment.sompredict.SOMPredictNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.healthassessment.somtrain.SOMTrainNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.healthprediction.arimaauto.ArimaAutoNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.healthprediction.arimafit.ArimaFitNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.healthprediction.arimapredict.ArimaPredictNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.healthprediction.curvefittingpredict.CurveFittingPredictNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.healthprediction.curvefittingtrain.CurveFittingTrainNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.machinetoolcutter.cutterdatapreprocess.CutterDataPreprocessNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.adjustedrandscore.AdjustedRandScoreNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.classificationmetrics.ClassificationMetricsNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.confusionmatrix.ConfusionMatrixNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.mse.MSENodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.normalizedmutualinformation.NormalizedMutualInformationNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.r2.R2NodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.rmse.RMSENodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.rocauc.ROCAUCNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.silhouettescore.SilhouetteScoreNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.optimization.geneticalgorithm.GeneticAlgorithmNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.optimization.optimizeengine.OptimizeEngineNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.optimization.particleswarmoptimization.ParticleSwarmOptimizationNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.optimization.simulatedannealing.SimulatedAnnealingNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.optimization.tspproblem.TspProblemNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.regression.annregression.AnnRegressionNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.regression.decisiontreeregress.DecisionTreeRegressNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.regression.linearegression.LinearegressionNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.regression.randomforest.RandomForestNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.regression.predict.RegressionPredictNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.regression.train.RegressionTrainNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.rulprediction.trend.feasel.TrendyFeatureSelectionNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.rulprediction.tsbp.predict.TSBPPredictNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.rulprediction.tsbp.train.TSBPTrainNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.thresholddetermination.spccusum.SpcCusumNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.thresholddetermination.spcewma.SpcEwmaNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.thresholddetermination.spcshewhart.SpcShewhartNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.thresholddetermination.sprt.SPRTNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.windenergy.powercurvebinfitting.PowerCurveBinFittingNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.windenergy.powercurvedeviationassessment.PowerCurveDeviationAssessmentNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.windenergy.windturbineperformanceparametersextraction.WindTurbinePerformanceParametersExtractionNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.windenergy.windturbineregimefilter.WindTurbineRegimeFilterNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.stats.testing.ttest.OneSampleTTestNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.stats.testing.ttest.TwoSampleTTestNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.stats.testing.ttest.PairedTTestNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.stats.testing.anova.OneWayANOVANodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.stats.viz.extended.ExtendedStatisticsNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.stats.correlation.cronbach.CronbachNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.stats.correlation.standcronbach.StandCronbachNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.stats.correlation.rank.RankCorrelationComputeNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.stats.outlier.handler.NumericOutliersNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.stats.outlier.applier.NumericOutliersApplyNodeFactory',
					version: '1.0.0.qualifier',
				},
			],
		},
		code: '200',
		message: 'ok',
	},
	'genpro://updateIncompatibleOperators': {
		data: {
			operators: [
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.io.csvreader.CSVReaderNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.io.csvwriter.CSVWriterNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.meta.looper.LoopStartCountNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.meta.looper.chunk.LoopStartChunkNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.meta.looper.columnlist3.ColumnListLoopStartNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.meta.looper.LoopEndNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.flowvariable.tablerowtovariable2.TableToVariableNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.switches.manualif.ManualIfNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.switches.endif.EndifNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.meta.looper.columnlist3.LoopEndJoinNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.io.listfiles2.ListFilesNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.meta.looper.group2.GroupLoopStartNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.meta.looper.group3.GroupLoopStartNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.flowvariable.tablecoltovariable2.TableColumnToVariableNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.io.modelobjectreader.ModelObjectReaderNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.io.modelobjectreader.ModelObjectWriterNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.datasource.operator.DataSourceReaderNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.datasource.operator.DataSourceWriterNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.datasource.operator.model.DataSourceReaderNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.datasource.operator.model.DataSourceWriterNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.layer.deepbelief.rbm.RBMLayerNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.layer.init.DL4JModelInitNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.layer.mlp.dense.DenseLayerNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.layer.convolutional.subsampling.PoolingLayerNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.layer.convolutional.convolution.ConvolutionLayerNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.learn.feedforward.FeedforwardLearnerNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.io.writer.Dl4JModelWriterNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.io.reader.dl4jmodel.Dl4JModelReaderNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.predict.feedforward.FeedforwardPredictorNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.layer.convolutional.lrn.LRNLayerNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.layer.autoencoder.AutoEncoderLayerNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.learn.feedforward.regression.FeedforwardRegressionLearnerNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.learn.feedforward.classification.FeedforwardClassificationLearnerNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.learn.feedforward.pretraining.FeedforwardPretrainingLearnerNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.predict.feedforward.classification.FeedforwardClassificationPredictorNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.predict.feedforward.regression.FeedforwardRegressionPredictorNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.dl4j.base.nodes.predict.feedforward.layer.FeedforwardLayerPredictorNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.sun.nodes.script.JavaScriptingNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.sun.nodes.script.node.rowfilter.JavaRowFilterNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.sun.nodes.script.node.rowsplitter.JavaRowSplitterNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.sun.nodes.script.node.editvar.JavaEditVariableNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.sun.nodes.script.node.ifswitch.JavaIfSwitchNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.svg.node.sparklines.SparkLineNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.ext.svg.node.radarplot.RadarplotAppenderFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.renderer2image.Renderer2ImageNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.image.readimage.ReadImageFromUrlNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.preproc.colconvert.stringtosvg.StringToSvgNodeFactory',
					version: '1.0.0',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.basic.add.AddNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.booltoint.BoolToIntNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.columnelection.DataColumnSpecFilterNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.basic.collectdata.CollectDataNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.basic.datafilter.DataFilterNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.basic.datageneration.DataGenerationNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.basic.datamerge.DataMergeNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.basic.datashape.CountNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.basic.datasplit.DataSplitNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.basic.divide.DivideNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.basic.exponent.ExponentNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.group.GroupNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.basic.logarithm.LogarithmNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.basic.logicaland.AndNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.basic.logicalnot.NotNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.basic.logicalor.OrNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.matrixdotproduct.MatrixDotProductNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.matrixeig.MatrixEigNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.matrixmultiplication.MatrixMultiplicationNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.matrixtranspose.TransposeTableNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.basic.power.PowerNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.basic.replace_column.ReplaceColumnNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.basic.replace_row.ReplaceRowNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.basic.reshape.ReshapeNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.rowselection.RowFilterNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.basic.subtract.SubtractNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.bearingdiagnosis.bearingdiagnosisfeature.BearingDiagnosisFeatureNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.bearingdiagnosis.bearingfaultfrequency.BearingFaultFrequencyNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.bearingdiagnosis.extractfrequencycomponent.ExtractFrequencyComponentNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.bearingdiagnosis.harmonic.noise.ratio.HarmonicNoiseRatioNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.classification.ann.AnnNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.classification.predict.ClassificationPredictNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.classification.train.ClassificationTrainNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.classification.decisiontreeclassifier.DecisionTreeClassifierNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.classification.logisticregression.LogisticRegressionNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.classification.randomforest.RandomForestNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.classification.svc.SVCNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.clustering.predict.ClusterPredictNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.clustering.train.ClusterTrainNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.clustering.kmeans.KMeansNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.datapreprocess.normalizationfit.NormalizationFitNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.clustering.gmm.GMMClusteringNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.dataattributesupervision.correlation.CorrelationNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.dataattributesupervision.dtw.DTWNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.dataattributesupervision.sensitivityanalysis.SensitivityAnalysisNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.datamining.apriori.AprioriNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.datamining.lcs.LCSNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.datapreprocess.datadiscretizationfit.DataDiscretizationFitNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.datapreprocess.data.discretization.transform.DataDiscretizationTransformNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.datapreprocess.interpolation.InterpolationNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.datapreprocess.interpolation.Predict.InterpolationPredictNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.datapreprocess.interpolation.Train.InterpolationTrainNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.datapreprocess.normalizationtransform.NormalizationTransformNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.datapreprocess.com.cyberinsight.cps.genpro.operator.datapreprocess.tlabeler.TlabelerNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.datapreprocess.tss.TSSNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.dataqualitycheck.derivativecheck.DerivativeCheckNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.dataqualitycheck.distributioncheck.DistributionCheckNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.dataqualitycheck.energycheck.EnergyCheckNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.dataqualitycheck.meancheck.MeanValueCheckNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.dataqualitycheck.npointcheck.NPointCheckNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.dataqualitycheck.posnegcheck.PosnegCheckNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.dataqualitycheck.rmscheck.RmsCheckNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.dataqualitycheck.upointcheck.UPointCheckNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.datapreprocess.outlierdetect.OutlierDetectNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.datapreprocess.smoothlowess.SmoothLowessNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.datapreprocess.smoothsavizky.SmoothSavizkyNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.datapreprocess.smote.SmoteNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.datapreprocess.sort.SortNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.fatureengineering.convolution.ConvolutionNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.fatureengineering.dbcp.DBCPNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.fatureengineering.deconvolution.DeconvolutionNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.fatureengineering.demodulation.DemodulationNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.fatureengineering.firfilter.FirFilterNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.fatureengineering.hht.HHTNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.fatureengineering.ihps.IHPSNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.fatureengineering.iirfilter.IirFilterNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.fatureengineering.imf.IMFNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.fatureengineering.kalmanfilter.KalmanFilterNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.fatureengineering.mallet.MalletNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.fatureengineering.modulation.ModulationNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.fatureengineering.rmsadaptivefilter.RmsAdaptiveFilterNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.fatureengineering.wpt.WPTNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.arps.ARPSNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.bpnn.BPNNNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.cpw.CPWNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.cwt.CwtNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.doublespectrum.DoubleSpectrumNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.dwt.DWTNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.ecdf.EmpiricalCumulativeDistributionNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.emd.EmdNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.envspec.EnvelopeSpectrumNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.envelop.demodulation.EnvelopDemodulationNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.fft.FFTNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.fishercriterion.FisherCriterionNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.hilbert.HilbertNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.holospectrum.HolospectrumNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.ips.IPSNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.isomap.ISOMAPNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.kurtogram.KurtogramNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.kurtosis.KurtosisNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.laplacianeigenmaps.LaplacianEigenmapsNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.da.LDANodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.lvq.LVQNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.max.MaxNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.mean.MeanNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.min.MinNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.moving.window.feature.extraction.MovingWindowFeatureExtractionNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.orderspectrum.OrderSpectrumNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.order.tracking.OrderTrackingNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.pcapredict.PcaPredictNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.pcatrain.PcaTrainNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.peaktopeak.PeaktopeakNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.psd.PSDNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.rms.RMSNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.skew.SkewnessNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.std.StandardDeviationNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.stft.STFTNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.treebagging.TreeBaggingNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.tsa.TSANodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.tsfe.TSFENodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.variance.VarianceNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.wienerfilter.WienerFilterNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.featureengineering.wvd.WvdNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.healthassessment.aakrpredict.AAKRPredictNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.healthassessment.aakrtrain.AakrTrainNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.healthassessment.gmmpfit.GmmpFitNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.healthassessment.gmmppredict.GmmpPredictNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.healthassessment.aakrpredict.PCAMSPCPredictNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.healthassessment.pcamspctrain.PCAMSPCTrainNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.healthassessment.sompredict.SOMPredictNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.healthassessment.somtrain.SOMTrainNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.healthassessment.sparseencoder.SparseEncoderNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.healthprediction.arimaauto.ArimaAutoNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.healthprediction.arimafit.ArimaFitNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.healthprediction.arimapredict.ArimaPredictNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.healthprediction.curvefittingpredict.CurveFittingPredictNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.healthprediction.curvefittingtrain.CurveFittingTrainNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.machinetoolcutter.cutterdatapreprocess.CutterDataPreprocessNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.modelevaluation.arrhenius.ArrheniusNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.modelevaluation.eyringrelationship.EyringRelationshipNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.modelevaluation.iplr.IplrNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.modelevaluation.logarithmiclinear.LogarithmicLinearNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.adjustedrandscore.AdjustedRandScoreNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.classificationmetrics.ClassificationMetricsNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.confusionmatrix.ConfusionMatrixNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.mse.MSENodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.normalizedmutualinformation.NormalizedMutualInformationNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.r2.R2NodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.rmse.RMSENodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.rocauc.ROCAUCNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.silhouettescore.SilhouetteScoreNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.optimization.geneticalgorithm.GeneticAlgorithmNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.optimization.optimizeengine.OptimizeEngineNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.optimization.particleswarmoptimization.ParticleSwarmOptimizationNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.optimization.simulatedannealing.SimulatedAnnealingNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.optimization.tspproblem.TspProblemNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.regression.annregression.AnnRegressionNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.regression.decisiontreeregress.DecisionTreeRegressNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.regression.linearegression.LinearegressionNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.regression.randomforest.RandomForestNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.regression.predict.RegressionPredictNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.regression.train.RegressionTrainNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.rulprediction.time.rearrage.TimeReArrangeNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.rulprediction.trend.feasel.TrendyFeatureSelectionNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.rulprediction.tsbp.predict.TSBPPredictNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.rulprediction.tsbp.train.TSBPTrainNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.thresholddetermination.spccusum.SpcCusumNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.thresholddetermination.spcewma.SpcEwmaNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.thresholddetermination.spcshewhart.SpcShewhartNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.thresholddetermination.sprt.SPRTNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.windenergy.powercurvebinfitting.PowerCurveBinFittingNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.windenergy.powercurvedeviationassessment.PowerCurveDeviationAssessmentNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.windenergy.windturbineperformanceparametersextraction.WindTurbinePerformanceParametersExtractionNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.operator.windenergy.windturbineregimefilter.WindTurbineRegimeFilterNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.stats.testing.ttest.OneSampleTTestNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.stats.testing.ttest.TwoSampleTTestNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.stats.testing.ttest.PairedTTestNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.stats.testing.anova.OneWayANOVANodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.stats.viz.extended.ExtendedStatisticsNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.stats.correlation.cronbach.CronbachNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.stats.correlation.standcronbach.StandCronbachNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.stats.correlation.rank.RankCorrelationComputeNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.stats.outlier.handler.NumericOutliersNodeFactory',
					version: '1.0.0.qualifier',
				},
				{
					id:
						'com.cyberinsight.cps.genpro.base.node.stats.outlier.applier.NumericOutliersApplyNodeFactory',
					version: '1.0.0.qualifier',
				},
			],
		},
		code: '200',
		message: 'ok',
	},
	'genpro://getTokenAndUserName': {
		code: '200',
		message: 'ok',
		data: {
			token: 'xxxxxx',
			name: 'xxx',
		},
	},
	'genpro://updateToken?token=xxxxxx': {
		data: {
			rewrite: '重写token成功',
		},
		code: '200',
		message: 'ok',
	},
	'/repo-operator/operators': {
		total: 139,
		list: [
			{
				id: 1081,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.clustering.gmm.GMMClusteringNodeFactory',
				icon: '/repo-operator/operators/icon/5bfe47b3bed40d0001f5e64d',
				name: 'GMM Clustering',
				desc: '初始化高斯混合聚类模型',
				fileSize: 14290,
				downloadCount: 6,
				categorys: { '/faultDiagnosisRoot': '故障诊断' },
				pluginId: 'com.cyberinsight.cps.genpro.operator.clustering.gmm',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811281544',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
					'1.0.0.201811281544',
				],
			},
			{
				id: 1080,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.rulprediction.tsbp.predict.TSBPPredictNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4fbdbbed40d00014f4212',
				name: 'TSBP Predict',
				desc: 'TSBP预测:利用TSBP模型进行剩余使用寿命预测',
				fileSize: 16061,
				downloadCount: 16,
				categorys: { '/RULRoot': '行业组件-集群剩余寿命预测' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.rulprediction.genpro_tsbp_predict',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811211430',
				versions: ['1.0.0.201811202144', '1.0.0.201811211430'],
			},
			{
				id: 1079,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.rulprediction.tsbp.train.TSBPTrainNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4bd90bed40d00014f420e',
				name: 'TSBP Train',
				desc:
					'TSBP训练:训练TSBP模型，用来在集群全生命周期数据充足的情况下，构建剩余寿命预测模型',
				fileSize: 17592,
				downloadCount: 0,
				categorys: { '/RULRoot': '行业组件-集群剩余寿命预测' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.rulprediction.genpro_tsbp_train',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: ['1.0.0.201811202144'],
			},
			{
				id: 1077,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.rulprediction.trend.feasel.TrendyFeatureSelectionNodeFactory',
				name: 'Trendy Feature Selection',
				desc: '趋势性特征选择',
				fileSize: 16396,
				downloadCount: 0,
				categorys: { '/RULRoot': '行业组件-集群剩余寿命预测' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.rulprediction.genpro_trend_feasel',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: ['1.0.0.201811202144'],
			},
			{
				id: 1076,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.windenergy.windturbineregimefilter.WindTurbineRegimeFilterNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4bafdbed40d00014f4204',
				name: 'Wind Turbine Regime Filter',
				desc: '根据提供的条件对风机数据进行筛选',
				fileSize: 63811,
				downloadCount: 3,
				categorys: { '/industryCmpts-WindEnergyRoot': '行业组件-风电' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.windenergy.genpro_wind_turbine_regime_filter',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: ['1.0.0.201811142221', '1.0.0.201811202144'],
			},
			{
				id: 1075,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.windenergy.windturbineperformanceparametersextraction.WindTurbinePerformanceParametersExtractionNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4bafdbed40d00014f4200',
				name: 'Wind Turbine Performance Parameters Extraction',
				desc: '根据提供的风机数据和环境参数计算风机性能参数',
				fileSize: 64053,
				downloadCount: 0,
				categorys: { '/industryCmpts-WindEnergyRoot': '行业组件-风电' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.windenergy.genpro_wind_turbine_performance_parameters_extraction',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: ['1.0.0.201811142221', '1.0.0.201811202144'],
			},
			{
				id: 1074,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.windenergy.powercurvedeviationassessment.PowerCurveDeviationAssessmentNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4bafdbed40d00014f41fc',
				name: 'Power Curve Deviation Assessment',
				desc: '功率曲线偏移评估',
				fileSize: 66151,
				downloadCount: 0,
				categorys: { '/industryCmpts-WindEnergyRoot': '行业组件-风电' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.windenergy.genpro_power_curve_deviation_assessment',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: ['1.0.0.201811142221', '1.0.0.201811202144'],
			},
			{
				id: 1073,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.windenergy.powercurvebinfitting.PowerCurveBinFittingNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4bafdbed40d00014f41f8',
				name: 'Power Curve Bin Fitting',
				desc: '根据提供的条件对风机数据进行筛选',
				fileSize: 62119,
				downloadCount: 0,
				categorys: { '/industryCmpts-WindEnergyRoot': '行业组件-风电' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.windenergy.genpro_power_curve_bin_fitting',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: ['1.0.0.201811142221', '1.0.0.201811202144'],
			},
			{
				id: 1072,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.thresholddetermination.sprt.SPRTNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4bafdbed40d00014f41f4',
				name: 'Sequential Probability Ratio Test',
				desc: '序贯概率比检验',
				fileSize: 20042,
				downloadCount: 2,
				categorys: { '/healthAssessmentRoot': '健康评估（阈值设计）' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.thresholddetermination.genpro_sprt',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1071,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.thresholddetermination.spcshewhart.SpcShewhartNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4bafdbed40d00014f41f0',
				name: 'Shewhart',
				desc: '统计过程控制控制图 - Shewhart控制图',
				fileSize: 13313,
				downloadCount: 0,
				categorys: { '/healthAssessmentRoot': '健康评估（阈值设计）' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.thresholddetermination.genpro_spc_shewhart',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1070,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.thresholddetermination.spcewma.SpcEwmaNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4bafdbed40d00014f41ec',
				name: 'EWMA',
				desc: '统计过程控制控制图 - 指数加权移动平均值的控制图',
				fileSize: 17787,
				downloadCount: 0,
				categorys: { '/healthAssessmentRoot': '健康评估（阈值设计）' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.thresholddetermination.genpro_spc_ewma',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1069,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.thresholddetermination.spccusum.SpcCusumNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4bafcbed40d00014f41e8',
				name: 'CUSUM',
				desc: '统计过程控制控制图 - 累积和的控制图',
				fileSize: 17381,
				downloadCount: 0,
				categorys: { '/healthAssessmentRoot': '健康评估（阈值设计）' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.thresholddetermination.genpro_spc_cusum',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1068,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.regression.train.RegressionTrainNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4bafcbed40d00014f41e4',
				name: 'Regression Train',
				desc: '训练回归模型',
				fileSize: 11031,
				downloadCount: 2,
				categorys: { '/generalAssemblyRoot': '通用组件' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.regression.genpro_regression_train',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201808311543',
					'1.0.0.201808311602',
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1067,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.regression.predict.RegressionPredictNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4bafcbed40d00014f41e0',
				name: 'Regression Predict',
				desc: '使用训练好的回归模型对输入数据进行预测',
				fileSize: 11025,
				downloadCount: 0,
				categorys: { '/generalAssemblyRoot': '通用组件' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.regression.genpro_regression_predict',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1066,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.regression.randomforest.RandomForestNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4bafcbed40d00014f41dc',
				name: 'Random Forest-R',
				desc: '随机森林回归模型',
				fileSize: 13368,
				downloadCount: 0,
				categorys: { '/healthAssessmentRoot': '健康评估（阈值设计）' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.regression.genpro_randomforestregression',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1065,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.regression.linearegression.LinearegressionNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4bafcbed40d00014f41d8',
				name: 'Multilinear Regression',
				desc: '多变量线性回归模型的初始化',
				fileSize: 58468,
				downloadCount: 0,
				categorys: { '/healthAssessmentRoot': '健康评估（阈值设计）' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.regression.genpro_linearegression',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1064,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.regression.decisiontreeregress.DecisionTreeRegressNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4bafcbed40d00014f41d4',
				name: 'Decision Tree-R',
				desc: '决策树回归模型的初始化',
				fileSize: 14413,
				downloadCount: 0,
				categorys: { '/healthAssessmentRoot': '健康评估（阈值设计）' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.regression.genpro_decisiontreeregress',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1063,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.regression.annregression.AnnRegressionNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4bafcbed40d00014f41d0',
				name: 'ANN-R',
				desc: '初始化人工神经网络回归模型',
				fileSize: 18832,
				downloadCount: 0,
				categorys: { '/healthAssessmentRoot': '健康评估（阈值设计）' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.regression.genpro_ann_regression',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1062,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.optimization.tspproblem.TspProblemNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4bafbbed40d00014f41cc',
				name: 'TSP Problem',
				desc: '将输入的城市坐标数据整理为Genpro可用的tsp问题类',
				fileSize: 16009,
				downloadCount: 0,
				categorys: { '/optimizationRoot': '优化' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.optimization.genpro_tsp_problem',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1061,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.optimization.simulatedannealing.SimulatedAnnealingNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4bafbbed40d00014f41c8',
				name: 'Simulated Annealing',
				desc: '设置模拟退火算法优化器',
				fileSize: 16941,
				downloadCount: 0,
				categorys: { '/optimizationRoot': '优化' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.optimization.genpro_simulated_annealing',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1060,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.optimization.particleswarmoptimization.ParticleSwarmOptimizationNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4bafbbed40d00014f41c4',
				name: 'Particle Swarm Optimization',
				desc: '设置粒子群算法优化器',
				fileSize: 18023,
				downloadCount: 0,
				categorys: { '/optimizationRoot': '优化' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.optimization.genpro_particle_swarm_optimization',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1059,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.optimization.optimizeengine.OptimizeEngineNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4bafbbed40d00014f41c0',
				name: 'Optimize Engine',
				desc: '结合问题和优化算法，求解结果',
				fileSize: 15187,
				downloadCount: 0,
				categorys: { '/optimizationRoot': '优化' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.optimization.genpro_optimize_engine',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1058,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.optimization.geneticalgorithm.GeneticAlgorithmNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4bafbbed40d00014f41bc',
				name: 'Genetic Algorithm',
				desc: '设置粒子群算法优化器',
				fileSize: 17152,
				downloadCount: 0,
				categorys: { '/optimizationRoot': '优化' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.optimization.genpro_genetic_algorithm',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1057,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.silhouettescore.SilhouetteScoreNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4bafbbed40d00014f41b8',
				name: 'Silhouette Score',
				desc: '计算用于评价聚类问题的轮廓系数',
				fileSize: 16495,
				downloadCount: 0,
				categorys: {
					'/modelPerformanceAnalysisRoot': '模型性能对标分析',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.genpro_silhouette_score',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: ['1.0.0.201811142221', '1.0.0.201811202144'],
			},
			{
				id: 1056,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.rocauc.ROCAUCNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4bafbbed40d00014f41b4',
				name: 'ROC-AUC',
				desc: '计算用于评价二分类预测结果的ROC曲线和AUC值',
				fileSize: 13559,
				downloadCount: 0,
				categorys: {
					'/modelPerformanceAnalysisRoot': '模型性能对标分析',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.genpro_roc_auc',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1055,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.rmse.RMSENodeFactory',
				icon: '/repo-operator/operators/icon/5bf4bafbbed40d00014f41b0',
				name: 'RMSE',
				desc:
					'计算两组数据的均方根误差，反映估计量与被估计量之间差异程度',
				fileSize: 11229,
				downloadCount: 0,
				categorys: {
					'/modelPerformanceAnalysisRoot': '模型性能对标分析',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.genpro_rmse',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: ['1.0.0.201811142221', '1.0.0.201811202144'],
			},
			{
				id: 1054,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.r2.R2NodeFactory',
				icon: '/repo-operator/operators/icon/5bf4bafabed40d00014f41ac',
				name: 'R2',
				desc: '计算两组数据的决定系数，主要用于回归问题的评价',
				fileSize: 11487,
				downloadCount: 0,
				categorys: {
					'/modelPerformanceAnalysisRoot': '模型性能对标分析',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.genpro_r2',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: ['1.0.0.201811142221', '1.0.0.201811202144'],
			},
			{
				id: 1053,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.normalizedmutualinformation.NormalizedMutualInformationNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4bafabed40d00014f41a8',
				name: 'Normalized Mutual Information',
				desc: '计算用于评价聚类问题的标准互信息',
				fileSize: 13057,
				downloadCount: 0,
				categorys: {
					'/modelPerformanceAnalysisRoot': '模型性能对标分析',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.genpro_normalized_mutual_information',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: ['1.0.0.201811142221', '1.0.0.201811202144'],
			},
			{
				id: 1052,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.mse.MSENodeFactory',
				icon: '/repo-operator/operators/icon/5bf4bafabed40d00014f41a4',
				name: 'MSE',
				desc:
					'计算两组数据的均方误差，反映估计量与被估计量之间差异程度',
				fileSize: 10216,
				downloadCount: 1,
				categorys: {
					'/modelPerformanceAnalysisRoot': '模型性能对标分析',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.genpro_mse',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201809201605',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1051,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.confusionmatrix.ConfusionMatrixNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4bafabed40d00014f41a0',
				name: 'Confusion Matrix',
				desc: '计算混淆矩阵以评估分类的准确度',
				fileSize: 10889,
				downloadCount: 0,
				categorys: {
					'/modelPerformanceAnalysisRoot': '模型性能对标分析',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.genpro_confusion_matrix',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1050,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.classificationmetrics.ClassificationMetricsNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4bafabed40d00014f419c',
				name: 'Accuracy Precision Recall',
				desc:
					'评估分类问题的准确率Accuracy，精准率Precision，和召回率Recall',
				fileSize: 18933,
				downloadCount: 0,
				categorys: {
					'/modelPerformanceAnalysisRoot': '模型性能对标分析',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.genpro_classification_metrics',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1049,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.adjustedrandscore.AdjustedRandScoreNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4bafabed40d00014f4198',
				name: 'Adjusted Rand Score',
				desc: '计算聚类问题中预测标签和真实标签间的兰德指数',
				fileSize: 12558,
				downloadCount: 0,
				categorys: {
					'/modelPerformanceAnalysisRoot': '模型性能对标分析',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.modelperformanceanalysis.genpro_adjusted_rand_score',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: ['1.0.0.201811142221', '1.0.0.201811202144'],
			},
			{
				id: 1048,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.machinetoolcutter.cutterdatapreprocess.CutterDataPreprocessNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4bafabed40d00014f4194',
				name: 'Cutter Data Preprocess',
				desc: '刀具机数据预处理',
				fileSize: 12012,
				downloadCount: 0,
				categorys: {
					'/industryCmpts-CuttermachineRoot': '行业组件-刀具机',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.machinetoolcutter.genpro_cutter_data_preprocess',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1047,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.healthprediction.curvefittingtrain.CurveFittingTrainNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4bafabed40d00014f4190',
				name: 'Curve Fitting Train',
				desc:
					'根据输入的xdata、ydata和所选函数类型，通过最小二乘法的方法拟合最优曲线。',
				fileSize: 17197,
				downloadCount: 0,
				categorys: { '/healthPredictionRoot': '健康预测' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.healthprediction.genpro_curve_fitting_train',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1046,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.healthprediction.curvefittingpredict.CurveFittingPredictNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf9bed40d00014f418c',
				name: 'Curve Fitting Predict',
				desc: '基于已训练的curve_fitting模型，对当前和未来数据进行预测',
				fileSize: 10709,
				downloadCount: 0,
				categorys: { '/healthPredictionRoot': '健康预测' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.healthprediction.genpro_curve_fitting_predict',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1045,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.healthprediction.arimapredict.ArimaPredictNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf9bed40d00014f4188',
				name: 'ARIMA Predict',
				desc:
					'根据已训练的ARIMA模型，对当前(in-sample)和未来(out-of-sample)的数据进行预测',
				fileSize: 18071,
				downloadCount: 0,
				categorys: { '/healthPredictionRoot': '健康预测' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.healthprediction.genpro_arima_predict',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1044,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.healthprediction.arimafit.ArimaFitNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf9bed40d00014f4184',
				name: 'ARIMA Train',
				desc:
					'由用户给定一组ARIMA模型参数和训练数据，直接拟合一个ARIMA模型',
				fileSize: 15932,
				downloadCount: 2,
				categorys: { '/healthPredictionRoot': '健康预测' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.healthprediction.genpro_arima_fit',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1043,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.healthprediction.arimaauto.ArimaAutoNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf9bed40d00014f4180',
				name: 'ARIMA Auto Train',
				desc:
					'该函数拟合一个由stationary ARIMA（非季节项）和seasonal ARIMA（季节项）两部分组成的ARIMA模型。该函数允许用户自定义ARIMA模型关键参数的取值范围（例如，p、d、q、波动周期等），自动寻找使得所选information criteria最小的最优参数。',
				fileSize: 20513,
				downloadCount: 0,
				categorys: { '/healthPredictionRoot': '健康预测' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.healthprediction.genpro_arima_auto',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1042,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.healthassessment.somtrain.SOMTrainNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf9bed40d00014f417c',
				name: 'SOM-MQE Train',
				desc: '训练自组织映射神经网络',
				fileSize: 15899,
				downloadCount: 0,
				categorys: { '/healthAssessmentRoot': '健康评估（阈值设计）' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.healthassessment.genpro_som_train',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1041,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.healthassessment.sompredict.SOMPredictNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf9bed40d00014f4178',
				name: 'SOM-MQE Predict',
				desc: '使用训练好的自组织映射神经网络进行异常检测',
				fileSize: 10667,
				downloadCount: 0,
				categorys: { '/healthAssessmentRoot': '健康评估（阈值设计）' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.healthassessment.genpro_som_predict',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1040,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.healthassessment.pcamspctrain.PCAMSPCTrainNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf9bed40d00014f4174',
				name: 'PCA-MSPC Train',
				desc: '主成分分析T2，SPE健康评估模型训练',
				fileSize: 18007,
				downloadCount: 2,
				categorys: { '/healthAssessmentRoot': '健康评估（阈值设计）' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.healthassessment.genpro_pca_mspc_train',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1039,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.healthassessment.aakrpredict.PCAMSPCPredictNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf9bed40d00014f4170',
				name: 'PCA-MSPC Predict',
				desc: '主成分分析T2，SPE健康评估，模型预测',
				fileSize: 10694,
				downloadCount: 2,
				categorys: { '/healthAssessmentRoot': '健康评估（阈值设计）' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.healthassessment.genpro_pca_mspc_predict',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1038,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.healthassessment.gmmppredict.GmmpPredictNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf8bed40d00014f416c',
				name: 'GMM-L2 Predict',
				desc: '基于高斯混合模型的健康预测模型，健康值预测',
				fileSize: 17217,
				downloadCount: 0,
				categorys: { '/healthAssessmentRoot': '健康评估（阈值设计）' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.healthassessment.genpro_gmmp_predict',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1037,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.healthassessment.gmmpfit.GmmpFitNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf8bed40d00014f4168',
				name: 'GMM-L2 Train',
				desc: '基于高斯混合模型的健康预测模型，健康状态模型训练',
				fileSize: 17523,
				downloadCount: 0,
				categorys: { '/healthAssessmentRoot': '健康评估（阈值设计）' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.healthassessment.genpro_gmmp_fit',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1036,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.healthassessment.aakrtrain.AakrTrainNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf8bed40d00014f4164',
				name: 'AAKR Train',
				desc: 'AAKR健康状态评估模型初始化及训练',
				fileSize: 13996,
				downloadCount: 0,
				categorys: { '/healthAssessmentRoot': '健康评估（阈值设计）' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.healthassessment.genpro_aakr_train',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1035,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.healthassessment.aakrpredict.AAKRPredictNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf8bed40d00014f4160',
				name: 'AAKR Predict',
				desc: 'AAKR健康状态评估模型的拟合和预测',
				fileSize: 11349,
				downloadCount: 1,
				categorys: { '/healthAssessmentRoot': '健康评估（阈值设计）' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.healthassessment.genpro_aakr_predict',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1034,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.wvd.WvdNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf8bed40d00014f415c',
				name: 'WVD',
				desc: '魏格纳威利分布 WVD',
				fileSize: 12293,
				downloadCount: 0,
				categorys: {
					'/featureExtractionRoot/tnfDomainFeatureExtraction':
						'时频域',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_wvd',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1033,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.wienerfilter.WienerFilterNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf8bed40d00014f4158',
				name: 'Wiener filter',
				desc: '维纳滤波，滤除信号中随机噪声',
				fileSize: 14824,
				downloadCount: 0,
				categorys: {
					'/featureExtractionRoot/frequencyDomainFeatureExtraction':
						'频域',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_wiener_filter',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1032,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.variance.VarianceNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf8bed40d00014f4154',
				name: 'Variance',
				desc: '时域统计量–方差',
				fileSize: 10167,
				downloadCount: 0,
				categorys: {
					'/featureExtractionRoot/timeDomainFeatureExtraction':
						'时域',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_var',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1031,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.tsa.TSANodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf8bed40d00014f4150',
				name: 'TSA',
				desc: '时域同步平均，可去除周期性信号中的随机噪声',
				fileSize: 15951,
				downloadCount: 0,
				categorys: {
					'/featureExtractionRoot/frequencyDomainFeatureExtraction':
						'频域',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_tsa',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1030,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.stft.STFTNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf7bed40d00014f414c',
				name: 'STFT',
				desc: '短时傅里叶变换STFT',
				fileSize: 14151,
				downloadCount: 0,
				categorys: {
					'/featureExtractionRoot/tnfDomainFeatureExtraction':
						'时频域',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_stft',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1029,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.std.StandardDeviationNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf7bed40d00014f4148',
				name: 'Standard Deviation',
				desc: '时域统计量–标准差',
				fileSize: 9504,
				downloadCount: 0,
				categorys: {
					'/featureExtractionRoot/timeDomainFeatureExtraction':
						'时域',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_std',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1028,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.skew.SkewnessNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf7bed40d00014f4144',
				name: 'Skewness',
				desc: '时域统计量–偏度',
				fileSize: 8511,
				downloadCount: 0,
				categorys: {
					'/featureExtractionRoot/timeDomainFeatureExtraction':
						'时域',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_skew',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1027,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.rms.RMSNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf7bed40d00014f4140',
				name: 'RMS',
				desc: '时域统计量–均方根',
				fileSize: 10075,
				downloadCount: 0,
				categorys: {
					'/featureExtractionRoot/timeDomainFeatureExtraction':
						'时域',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_rms',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1026,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.psd.PSDNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf7bed40d00014f413c',
				name: 'Power Spectrum',
				desc: '功率谱估计，可得到时域信号的功率谱密度和功率谱',
				fileSize: 14573,
				downloadCount: 0,
				categorys: {
					'/featureExtractionRoot/frequencyDomainFeatureExtraction':
						'频域',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_psd',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1025,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.peaktopeak.PeaktopeakNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf7bed40d00014f4138',
				name: 'Peak to peak',
				desc: '时域统计量–峰峰值',
				fileSize: 8676,
				downloadCount: 1,
				categorys: {
					'/featureExtractionRoot/timeDomainFeatureExtraction':
						'时域',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_peaktopeak',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1024,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.pcatrain.PcaTrainNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf7bed40d00014f4134',
				name: 'PCA Fit',
				desc: '主成分分析训练',
				fileSize: 14842,
				downloadCount: 2,
				categorys: { '/featureSelectionRoot': '特征选择/降维' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_pca_train',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1023,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.pcapredict.PcaPredictNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf7bed40d00014f4130',
				name: 'PCA Transform',
				desc: '主成分分析预测',
				fileSize: 10687,
				downloadCount: 2,
				categorys: { '/featureSelectionRoot': '特征选择/降维' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_pca_predict',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1022,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.order.tracking.OrderTrackingNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf6bed40d00014f412c',
				name: 'Order Tracking',
				desc:
					'对等时间间隔采样的时域信号进行阶次跟踪重采样，得到等角度间隔的时域信号',
				fileSize: 64501,
				downloadCount: 0,
				categorys: { '/featureSelectionRoot': '特征选择/降维' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_order_tracking',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1021,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.orderspectrum.OrderSpectrumNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf6bed40d00014f4128',
				name: 'Order Spectrum',
				desc: '阶次跟踪',
				fileSize: 14626,
				downloadCount: 0,
				categorys: {
					'/featureExtractionRoot/frequencyDomainFeatureExtraction':
						'频域',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_order_spectrum',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1020,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.moving.window.feature.extraction.MovingWindowFeatureExtractionNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf6bed40d00014f4124',
				name: 'Moving Window Feature Extraction',
				desc: '对数据根据关键字分组并分别计算',
				fileSize: 19269,
				downloadCount: 0,
				categorys: {
					'/featureExtractionRoot/timeDomainFeatureExtraction':
						'时域',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_moving_window_feature_extraction',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: ['1.0.0.201811142221', '1.0.0.201811202144'],
			},
			{
				id: 1019,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.min.MinNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf6bed40d00014f4120',
				name: 'Min',
				desc: '时域统计量–最小值',
				fileSize: 9792,
				downloadCount: 0,
				categorys: {
					'/featureExtractionRoot/timeDomainFeatureExtraction':
						'时域',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_min',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1018,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.mean.MeanNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf6bed40d00014f411c',
				name: 'Mean',
				desc: '时域统计量–均值',
				fileSize: 8852,
				downloadCount: 1,
				categorys: {
					'/featureExtractionRoot/timeDomainFeatureExtraction':
						'时域',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_mean',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1017,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.max.MaxNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf6bed40d00014f4118',
				name: 'Max',
				desc: '时域统计量–最大值',
				fileSize: 11616,
				downloadCount: 2,
				categorys: {
					'/featureExtractionRoot/timeDomainFeatureExtraction':
						'时域',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_max',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1016,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.kurtosis.KurtosisNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf6bed40d00014f4114',
				name: 'Kurtosis',
				desc: '时域统计量–峭度',
				fileSize: 14688,
				downloadCount: 1,
				categorys: {
					'/featureExtractionRoot/timeDomainFeatureExtraction':
						'时域',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_kurtosis',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1015,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.kurtogram.KurtogramNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf6bed40d00014f4110',
				name: 'Kurtogram',
				desc: '计算信号谱峭度，提取谱峭度最大值对应的频段',
				fileSize: 14282,
				downloadCount: 0,
				categorys: {
					'/featureExtractionRoot/frequencyDomainFeatureExtraction':
						'频域',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_kurtogram',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1014,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.isomap.ISOMAPNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf5bed40d00014f410c',
				name: 'ISOMAP',
				desc:
					'对输入数据进行ISOMAP降维。ISOMAP为一种非线性降维方法，是在MDS算法的基础上衍生出的一种算法，MDS算法是保持降维后的样本间距离不变，Isomap算法引进了邻域图，样本只与其相邻的样本连接，他们之间的距离可直接计算，较远的点可通过最小路径算出距离，在此基础上进行降维保距。',
				fileSize: 15847,
				downloadCount: 0,
				categorys: { '/featureSelectionRoot': '特征选择/降维' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_isomap',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1013,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.ips.IPSNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf5bed40d00014f4108',
				name: 'Instantaneous Power Spectrum',
				desc: '瞬时功率谱',
				fileSize: 16480,
				downloadCount: 0,
				categorys: {
					'/featureExtractionRoot/frequencyDomainFeatureExtraction':
						'频域',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_ips',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1012,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.hilbert.HilbertNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf5bed40d00014f4104',
				name: 'Hilbert Transform',
				desc: '希尔伯特变换',
				fileSize: 11282,
				downloadCount: 0,
				categorys: {
					'/featureExtractionRoot/frequencyDomainFeatureExtraction':
						'频域',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_hilbert',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1011,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.fishercriterion.FisherCriterionNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf5bed40d00014f4100',
				name: 'Fisher Criterion',
				desc: 'Fisher criterion线性判别准则',
				fileSize: 13924,
				downloadCount: 0,
				categorys: { '/featureSelectionRoot': '特征选择/降维' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_fisher_criterion',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1010,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.fft.FFTNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf5bed40d00014f40fc',
				name: 'FFT',
				desc: '快速傅里叶变换',
				fileSize: 17115,
				downloadCount: 1,
				categorys: {
					'/featureExtractionRoot/frequencyDomainFeatureExtraction':
						'频域',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_fft',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1009,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.envspec.EnvelopeSpectrumNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf5bed40d00014f40f8',
				name: 'Envelope Spectrum',
				desc: '包络谱分析 Envelope Spectrum',
				fileSize: 13435,
				downloadCount: 0,
				categorys: {
					'/featureExtractionRoot/frequencyDomainFeatureExtraction':
						'频域',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_env_spec',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1008,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.envelop.demodulation.EnvelopDemodulationNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf5bed40d00014f40f4',
				name: 'Envelop Demodulation',
				desc:
					'基于希尔伯特变换对时域信号进行包络解调，得到信号包络的瞬时幅值和瞬时相位',
				fileSize: 61217,
				downloadCount: 0,
				categorys: { '/featureSelectionRoot': '特征选择/降维' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_envelop_demodulation',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1007,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.emd.EmdNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf5bed40d00014f40f0',
				name: 'EMD',
				desc: '经验模态分解',
				fileSize: 12567,
				downloadCount: 0,
				categorys: {
					'/featureExtractionRoot/tnfDomainFeatureExtraction':
						'时频域',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_emd',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1006,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.ecdf.EmpiricalCumulativeDistributionNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf4bed40d00014f40ec',
				name: 'Empirical Cumulative Distribution',
				desc: '经验累积概率分布',
				fileSize: 11318,
				downloadCount: 0,
				categorys: {
					'/featureExtractionRoot/frequencyDomainFeatureExtraction':
						'频域',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_ecdf',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1005,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.dwt.DWTNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf4bed40d00014f40e8',
				name: 'DWT',
				desc: '离散小波变换，用于信号时频分析',
				fileSize: 14553,
				downloadCount: 0,
				categorys: {
					'/featureExtractionRoot/tnfDomainFeatureExtraction':
						'时频域',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_dwt',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1004,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.doublespectrum.DoubleSpectrumNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf4bed40d00014f40e4',
				name: 'Double Spectrum',
				desc: '双谱分析',
				fileSize: 15766,
				downloadCount: 0,
				categorys: {
					'/featureExtractionRoot/frequencyDomainFeatureExtraction':
						'频域',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_double_spectrum',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1003,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.cwt.CwtNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf4bed40d00014f40e0',
				name: 'CWT',
				desc: '连续小波变换，用于信号时频分析',
				fileSize: 13354,
				downloadCount: 9,
				categorys: {
					'/featureExtractionRoot/tnfDomainFeatureExtraction':
						'时频域',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_cwt',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201808301702',
					'1.0.0.201809041802',
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1002,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.cpw.CPWNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf4bed40d00014f40dc',
				name: 'Cepstrum pre-whitening',
				desc: '倒谱预白化',
				fileSize: 13177,
				downloadCount: 7,
				categorys: {
					'/featureExtractionRoot/frequencyDomainFeatureExtraction':
						'频域',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_cpw',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809070950',
					'1.0.0.201809071416',
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1001,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.featureengineering.arps.ARPSNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf4bed40d00014f40d8',
				name: 'Autoregressive Power Spectrum',
				desc: '自回归谱',
				fileSize: 14862,
				downloadCount: 0,
				categorys: {
					'/featureExtractionRoot/frequencyDomainFeatureExtraction':
						'频域',
				},
				pluginId:
					'com.cyberinsight.cps.genpro.operator.featureengineering.genpro_arps',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 1000,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.datapreprocess.sort.SortNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf4bed40d00014f40d4',
				name: 'Sort',
				desc: '对数组进行排序',
				fileSize: 15843,
				downloadCount: 40,
				categorys: { '/dataPreprocessingRoot': '数据预处理' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.dataqualitycheck.genpro_sort',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809031658',
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 999,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.datapreprocess.smote.SmoteNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf3bed40d00014f40d0',
				name: 'SMOTE',
				desc: '利用SMOTE（合成少数样本过采样技术）进行过采样',
				fileSize: 15145,
				downloadCount: 0,
				categorys: { '/dataPreprocessingRoot': '数据预处理' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.dataqualitycheck.genpro_smote',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 998,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.datapreprocess.smoothsavizky.SmoothSavizkyNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf3bed40d00014f40cc',
				name: 'Smooth Savitzky Golay',
				desc:
					'用Savitzky-Golay滤波器平滑数据。Savitzky-Golay滤波器从数据中去除高频噪声，它比其它类型的滤波方法（如移动平均技术）更好地保留了信号的原始形状和特征。',
				fileSize: 17920,
				downloadCount: 0,
				categorys: { '/dataPreprocessingRoot': '数据预处理' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.dataqualitycheck.genpro_smooth_savitzky_golay',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 997,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.datapreprocess.smoothlowess.SmoothLowessNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf3bed40d00014f40c8',
				name: 'Smooth Lowess',
				desc: '局部加权回归散点平滑法 平滑变量',
				fileSize: 16769,
				downloadCount: 0,
				categorys: { '/dataPreprocessingRoot': '数据预处理' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.dataqualitycheck.genpro_smooth_lowess',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 996,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.datapreprocess.outlierdetect.OutlierDetectNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf3bed40d00014f40c4',
				name: 'Outlier Detection',
				desc:
					'用于检测并去除数据中的异常点，同时可人为选择异常点的识别方法和认为的异常点的百分比',
				fileSize: 13927,
				downloadCount: 0,
				categorys: { '/dataQualityCheckRoot': '数据质量检测' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.dataqualitycheck.genpro_outlier_detect',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 995,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.dataqualitycheck.upointcheck.UPointCheckNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf3bed40d00014f40c0',
				name: 'U Point Check',
				desc:
					'该模块检查振动数据中有多大比例的数据点数值不同， 从而判断振动数据的质量是否满足分析要求。一般来说，比例应不小于99.99%.',
				fileSize: 13792,
				downloadCount: 0,
				categorys: { '/dataQualityCheckRoot': '数据质量检测' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.dataqualitycheck.genpro_check_upoint',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 994,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.dataqualitycheck.rmscheck.RmsCheckNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf3bed40d00014f40bc',
				name: 'RMS Check',
				desc:
					'该模块检查振动数据的RMS value有没有在合理的范围内，从而判断振动数据的质量是否满足分析要求',
				fileSize: 12026,
				downloadCount: 0,
				categorys: { '/dataQualityCheckRoot': '数据质量检测' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.dataqualitycheck.genpro_check_rms',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 993,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.dataqualitycheck.posnegcheck.PosnegCheckNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf3bed40d00014f40b8',
				name: 'Positive and Negative Point Check',
				desc:
					'该模块检查振动数据中正数与负数的比例， 从而判断振动数据的质量是否满足分析要求。一般来说，比例应小于52%.',
				fileSize: 13109,
				downloadCount: 0,
				categorys: { '/dataQualityCheckRoot': '数据质量检测' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.dataqualitycheck.genpro_check_posneg',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 992,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.dataqualitycheck.npointcheck.NPointCheckNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf3bed40d00014f40b4',
				name: 'N Point Check',
				desc:
					'该模块检查振动数据中有多少个相邻点具有相同的数值，从而判断振动数据的质量是否满足分析要求。一般来说，对于高采样频率的数据来说，具有相同数值的相邻点数目应少于2.',
				fileSize: 13829,
				downloadCount: 0,
				categorys: { '/dataQualityCheckRoot': '数据质量检测' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.dataqualitycheck.genpro_check_npoint',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 991,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.dataqualitycheck.meancheck.MeanValueCheckNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf2bed40d00014f40b0',
				name: 'Mean Value Check',
				desc:
					'该模块检查振动数据的Mean value是不是在0附近，从而判断振动数据的质量是否满足分析要求',
				fileSize: 13166,
				downloadCount: 0,
				categorys: { '/dataQualityCheckRoot': '数据质量检测' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.dataqualitycheck.genpro_check_mean',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 990,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.dataqualitycheck.energycheck.EnergyCheckNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf2bed40d00014f40ac',
				name: 'Energy Conservation Rule Check',
				desc:
					'该模块检查振动数据在时间域内的能量与频率域内的能量差别大小， 从而判断振动数据的质量是否满足分析要求。一般来说，两者差别应小于0.01.',
				fileSize: 12540,
				downloadCount: 0,
				categorys: { '/dataQualityCheckRoot': '数据质量检测' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.dataqualitycheck.genpro_check_energy',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 989,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.dataqualitycheck.distributioncheck.DistributionCheckNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf2bed40d00014f40a8',
				name: 'Statistical distribution Check',
				desc:
					'该模块通过计算振动信号的经验累积分布和正态分布之间的k distance和h distance，来判断振动信号是否符合正态分布',
				fileSize: 13983,
				downloadCount: 0,
				categorys: { '/dataQualityCheckRoot': '数据质量检测' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.dataqualitycheck.genpro_check_distribution',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 988,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.dataqualitycheck.derivativecheck.DerivativeCheckNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf2bed40d00014f40a4',
				name: 'Derivative Check',
				desc:
					'该模块检查振动数据的微分值及其RMS值和奇异点个数， 从而判断振动数据的质量是否满足分析要求。一般来说，原始数据微分后的RMS数值不超过0.015，奇异点个数不超过20.',
				fileSize: 15538,
				downloadCount: 0,
				categorys: { '/dataQualityCheckRoot': '数据质量检测' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.dataqualitycheck.genpro_check_derivative',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 987,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.datapreprocess.com.cyberinsight.cps.genpro.operator.datapreprocess.tlabeler.TlabelerNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf2bed40d00014f40a0',
				name: 'Label by Time',
				desc:
					'数据打标签，根据故障维护记录中的故障起始、结束时间，对数据进行标记。',
				fileSize: 19251,
				downloadCount: 0,
				categorys: { '/dataPreprocessingRoot': '数据预处理' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.datapreprocess.genpro_tlabeler',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 986,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.datapreprocess.normalizationtransform.NormalizationTransformNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf2bed40d00014f409c',
				name: 'Normalization Transform',
				desc:
					'数据正则化处理                         根据已经训练好的正则化模型对数据进行正则化',
				fileSize: 11526,
				downloadCount: 0,
				categorys: { '/dataPreprocessingRoot': '数据预处理' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.datapreprocess.genpro_normalization_transform',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 985,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.datapreprocess.interpolation.Train.InterpolationTrainNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf2bed40d00014f4098',
				name: 'Interpolation Train',
				desc: '插值计算训练',
				fileSize: 14268,
				downloadCount: 0,
				categorys: { '/dataPreprocessingRoot': '数据预处理' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.datapreprocess.genpro_interpolation_Train',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: ['1.0.0.201811142221', '1.0.0.201811202144'],
			},
			{
				id: 984,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.datapreprocess.interpolation.Predict.InterpolationPredictNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf1bed40d00014f4094',
				name: 'Interpolation Predict',
				desc: '插值计算预测',
				fileSize: 12889,
				downloadCount: 0,
				categorys: { '/dataPreprocessingRoot': '数据预处理' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.datapreprocess.genpro_interpolation_Predict',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: ['1.0.0.201811142221', '1.0.0.201811202144'],
			},
			{
				id: 983,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.datapreprocess.data.discretization.transform.DataDiscretizationTransformNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf1bed40d00014f4090',
				name: 'Data Discretization Transform',
				desc:
					'数据离散化处理根据已经训练好的离散化模型对数据进行离散化',
				fileSize: 63714,
				downloadCount: 0,
				categorys: { '/dataPreprocessingRoot': '数据预处理' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.datapreprocess.genpro_data_discretization_transform',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: ['1.0.0.201811142221', '1.0.0.201811202144'],
			},
			{
				id: 982,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.datapreprocess.datadiscretizationfit.DataDiscretizationFitNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf1bed40d00014f408c',
				name: 'Data Discretization Fit',
				desc:
					'数据离散化处理根据输入数据训练离散化模型, 并对输入数据进行离散化处理',
				fileSize: 66812,
				downloadCount: 0,
				categorys: { '/dataPreprocessingRoot': '数据预处理' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.datapreprocess.genpro_data_discretization_fit',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: ['1.0.0.201811142221', '1.0.0.201811202144'],
			},
			{
				id: 981,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.datamining.apriori.AprioriNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf1bed40d00014f4088',
				name: 'Apriori',
				desc: '挖掘频繁项集',
				fileSize: 14322,
				downloadCount: 0,
				categorys: { '/dataMiningRoot': '数据挖掘' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.datamining.genpro_apriori',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 980,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.dataattributesupervision.dtw.DTWNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf1bed40d00014f4084',
				name: 'DTW',
				desc: '进行两串时间序列的动态时间规整',
				fileSize: 15818,
				downloadCount: 3,
				categorys: { '/dataAttributeCheckingRoot': '数据属性检查' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.dataattributesupervision.genpro_dtw',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 979,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.dataattributesupervision.correlation.CorrelationNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf1bed40d00014f4080',
				name: 'Correlation',
				desc:
					'Calculate the correlation between two vectors of the same length',
				fileSize: 14160,
				downloadCount: 0,
				categorys: { '/dataAttributeCheckingRoot': '数据属性检查' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.dataattributesupervision.genpro_corr',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 977,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.datapreprocess.normalizationfit.NormalizationFitNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf1bed40d00014f4078',
				name: 'Normalization Fit',
				desc:
					'会根据输入数据训练一个normalizer, 并对输入数据进行正则化处理此处的正则化仅对列操作，使每一个列的 mean == 0, std == 1',
				fileSize: 10836,
				downloadCount: 0,
				categorys: { '/dataPreprocessingRoot': '数据预处理' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.clustering.genpro_normalization_fit',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 976,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.clustering.train.ClusterTrainNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf1bed40d00014f4074',
				name: 'Cluster Train',
				desc: '训练聚类模型',
				fileSize: 11607,
				downloadCount: 2,
				categorys: { '/generalAssemblyRoot': '通用组件' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.clustering.genpro_cluster_train',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 975,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.clustering.predict.ClusterPredictNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf0bed40d00014f4070',
				name: 'Cluster Predict',
				desc: '使用训练好的聚类模型对输入数据进行预测',
				fileSize: 11332,
				downloadCount: 2,
				categorys: { '/generalAssemblyRoot': '通用组件' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.clustering.genpro_cluster_predict',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 974,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.classification.svc.SVCNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf0bed40d00014f406c',
				name: 'Support Vector Machine-C',
				desc: '支持向量机分类模型',
				fileSize: 13663,
				downloadCount: 7,
				categorys: { '/faultDiagnosisRoot': '故障诊断' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.classification.genpro_svc',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201808310941',
					'1.0.0.201809071443',
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 973,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.classification.randomforest.RandomForestNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf0bed40d00014f4068',
				name: 'Random Forest-C',
				desc: '随机森林分类模型',
				fileSize: 11625,
				downloadCount: 1,
				categorys: { '/faultDiagnosisRoot': '故障诊断' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.classification.genpro_randomforestclassifier',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 972,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.classification.logisticregression.LogisticRegressionNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf0bed40d00014f4064',
				name: 'Logistic Regression',
				desc: '逻辑回归模型',
				fileSize: 14061,
				downloadCount: 1,
				categorys: { '/healthAssessmentRoot': '健康评估（阈值设计）' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.classification.genpro_logisticregression',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 971,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.classification.decisiontreeclassifier.DecisionTreeClassifierNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf0bed40d00014f4060',
				name: 'Decision Tree-C',
				desc: '初始化一个决策树分类模型',
				fileSize: 17966,
				downloadCount: 0,
				categorys: { '/faultDiagnosisRoot': '故障诊断' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.classification.genpro_decisiontreeclassifier',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 970,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.classification.train.ClassificationTrainNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf0bed40d00014f405c',
				name: 'Classification Train',
				desc: '训练分类模型',
				fileSize: 12660,
				downloadCount: 11,
				categorys: { '/generalAssemblyRoot': '通用组件' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.classification.genpro_classification_train',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 969,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.classification.predict.ClassificationPredictNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf0bed40d00014f4058',
				name: 'Classification Predict',
				desc: '使用训练好的分类模型对输入数据进行预测',
				fileSize: 12298,
				downloadCount: 14,
				categorys: { '/generalAssemblyRoot': '通用组件' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.classification.genpro_classification_predict',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 968,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.classification.ann.AnnNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baf0bed40d00014f4054',
				name: 'ANN-C',
				desc: '初始化人工神经网络分类模型',
				fileSize: 19096,
				downloadCount: 8,
				categorys: { '/faultDiagnosisRoot': '故障诊断' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.classification.genpro_ann_classification',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 967,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.bearingdiagnosis.harmonic.noise.ratio.HarmonicNoiseRatioNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baefbed40d00014f4050',
				name: 'Harmonic Noise Ratio',
				desc:
					'根据已知的特征频率在频谱上提取特征频率处的幅值, 搜索方法为在特征频率附近搜索幅值的峰值',
				fileSize: 23566,
				downloadCount: 0,
				categorys: { '/industryCmpts-BearingRoot': '行业组件-轴承' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.bearingdiagnosis.genpro_harmonic_noise_ratio',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: ['1.0.0.201811142221', '1.0.0.201811202144'],
			},
			{
				id: 966,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.bearingdiagnosis.extractfrequencycomponent.ExtractFrequencyComponentNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baefbed40d00014f404c',
				name: 'Extract Frequency Component',
				desc:
					'根据已知的特征频率在频谱上提取特征频率处的幅值, 搜索方法为在特征频率附近搜索幅值的峰值',
				fileSize: 14086,
				downloadCount: 0,
				categorys: { '/industryCmpts-BearingRoot': '行业组件-轴承' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.bearingdiagnosis.genpro_extract_frequency_component',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: ['1.0.0.201811142221', '1.0.0.201811202144'],
			},
			{
				id: 965,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.bearingdiagnosis.bearingfaultfrequency.BearingFaultFrequencyNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baefbed40d00014f4048',
				name: 'Bearing Fault Frequency',
				desc: '根据滚动轴承几何参数计算滚动轴承故障特征频率',
				fileSize: 11694,
				downloadCount: 0,
				categorys: { '/industryCmpts-BearingRoot': '行业组件-轴承' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.bearingdiagnosis.genpro_bearing_fault_frequency',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: ['1.0.0.201811142221', '1.0.0.201811202144'],
			},
			{
				id: 964,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.bearingdiagnosis.bearingdiagnosisfeature.BearingDiagnosisFeatureNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baefbed40d00014f4044',
				name: 'Bearing Diagnosis Feature',
				desc: '轴承故障特征提取',
				fileSize: 15073,
				downloadCount: 0,
				categorys: { '/industryCmpts-BearingRoot': '行业组件-轴承' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.bearingdiagnosis.genpro_bearing_diagnosis_feature',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 963,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.basic.subtract.SubtractNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baefbed40d00014f4040',
				name: 'Subtract',
				desc: '两个矩阵数值相减',
				fileSize: 11153,
				downloadCount: 0,
				categorys: { '/matrixOperationRoot': '矩阵运算' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.basic.genpro_subtract',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 962,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.rowselection.RowFilterNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baefbed40d00014f403c',
				name: 'Select Row',
				desc: '按行选择数据',
				fileSize: 63782,
				downloadCount: 68,
				categorys: { '/matrixOperationRoot': '矩阵运算' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.basic.genpro_row_selection',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201808291711',
					'1.0.0.201809071726',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 961,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.basic.reshape.ReshapeNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baefbed40d00014f4038',
				name: 'Reshape',
				desc: '数据重塑，将数据转换为[row, column]大小的新数据',
				fileSize: 14804,
				downloadCount: 4,
				categorys: { '/matrixOperationRoot': '矩阵运算' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.basic.genpro_reshape',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071329',
					'1.0.0.201809071419',
					'1.0.0.201809071437',
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 960,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.basic.power.PowerNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baefbed40d00014f4034',
				name: 'Power',
				desc: '矩阵幂运算',
				fileSize: 13256,
				downloadCount: 0,
				categorys: { '/matrixOperationRoot': '矩阵运算' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.basic.genpro_power',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 959,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.matrixtranspose.TransposeTableNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baeebed40d00014f4030',
				name: 'Transpose',
				desc: '对矩阵进行转置',
				fileSize: 53144,
				downloadCount: 0,
				categorys: { '/matrixOperationRoot': '矩阵运算' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.basic.genpro_matrix_transpose',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 958,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.matrixmultiplication.MatrixMultiplicationNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baeebed40d00014f402c',
				name: 'Matrix Multiplication',
				desc: '矩阵乘法',
				fileSize: 52864,
				downloadCount: 0,
				categorys: { '/matrixOperationRoot': '矩阵运算' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.basic.genpro_matrix_multiplication',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 957,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.matrixeig.MatrixEigNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baeebed40d00014f4028',
				name: 'Eigenvalue/Eigenvector',
				desc: '求矩阵特征值和特征向量',
				fileSize: 52261,
				downloadCount: 1,
				categorys: { '/matrixOperationRoot': '矩阵运算' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.basic.genpro_matrix_eig',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071739',
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 956,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.matrixdotproduct.MatrixDotProductNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baeebed40d00014f4024',
				name: 'Multiply/Matrix Dot Product',
				desc: '乘法或矩阵点乘',
				fileSize: 52355,
				downloadCount: 0,
				categorys: { '/matrixOperationRoot': '矩阵运算' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.basic.genpro_matrix_dotproduct',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 955,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.basic.logicalor.OrNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baeebed40d00014f4020',
				name: 'Or',
				desc: '逻辑运算（或）',
				fileSize: 10228,
				downloadCount: 0,
				categorys: { '/matrixOperationRoot': '矩阵运算' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.basic.genpro_logical_or',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 954,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.basic.logicalnot.NotNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baeebed40d00014f401c',
				name: 'Not',
				desc: '逻辑运算（非）',
				fileSize: 10087,
				downloadCount: 0,
				categorys: { '/matrixOperationRoot': '矩阵运算' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.basic.genpro_logical_not',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 953,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.basic.logicaland.AndNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baeebed40d00014f4018',
				name: 'And',
				desc: '逻辑运算（与）',
				fileSize: 10443,
				downloadCount: 0,
				categorys: { '/matrixOperationRoot': '矩阵运算' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.basic.genpro_logical_and',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 952,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.basic.logarithm.LogarithmNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baeebed40d00014f4014',
				name: 'Logarithm',
				desc: '对数运算',
				fileSize: 13506,
				downloadCount: 0,
				categorys: { '/matrixOperationRoot': '矩阵运算' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.basic.genpro_logarithm',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 951,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.group.GroupNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baedbed40d00014f4010',
				name: 'Group',
				desc: '对数据根据关键字分组并分别计算',
				fileSize: 17422,
				downloadCount: 17,
				categorys: { '/matrixOperationRoot': '矩阵运算' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.basic.genpro_group',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201808311657',
					'1.0.0.201808311758',
					'1.0.0.201808311823',
					'1.0.0.201809071536',
					'1.0.0.201809071546',
					'1.0.0.201809071716',
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 950,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.basic.exponent.ExponentNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baedbed40d00014f400c',
				name: 'Exponent',
				desc: '指数运算',
				fileSize: 11020,
				downloadCount: 0,
				categorys: { '/matrixOperationRoot': '矩阵运算' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.basic.genpro_exponent',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 949,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.basic.divide.DivideNodeFactory',
				name: 'Divide',
				desc: '数值相除',
				fileSize: 10896,
				downloadCount: 0,
				categorys: { '/matrixOperationRoot': '矩阵运算' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.basic.genpro_divide',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 948,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.basic.datasplit.DataSplitNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baedbed40d00014f4006',
				name: 'Split Data',
				desc:
					'分割数据，拆分方式可以选择随机选取或者顺序选取；可以按照比例或者样本数量拆分',
				fileSize: 57852,
				downloadCount: 6,
				categorys: { '/matrixOperationRoot': '矩阵运算' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.basic.genpro_data_split',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201810081641',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 947,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.basic.datamerge.DataMergeNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baedbed40d00014f4002',
				name: 'Append',
				desc: '数据连接，可以选择沿行方向或者沿列方向连接',
				fileSize: 12300,
				downloadCount: 2,
				categorys: { '/matrixOperationRoot': '矩阵运算' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.basic.genpro_data_merge',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201809061822',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 946,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.basic.datageneration.DataGenerationNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baedbed40d00014f3ffe',
				name: 'Data Generation',
				desc: '生成一组指定行数和列数的数据',
				fileSize: 13425,
				downloadCount: 0,
				categorys: { '/matrixOperationRoot': '矩阵运算' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.basic.genpro_data_generation',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 945,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.basic.datafilter.DataFilterNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baedbed40d00014f3ffa',
				name: 'Data Filter',
				desc:
					'根据用户自定义规则，对输入数据进行筛选，输出符合规则的布尔遮罩。',
				fileSize: 84454,
				downloadCount: 0,
				categorys: { '/matrixOperationRoot': '矩阵运算' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.basic.genpro_data_filter',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 944,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.basic.collectdata.CollectDataNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baecbed40d00014f3ff6',
				name: 'Collect Data',
				desc: '将数据合并为一个Map对象',
				fileSize: 8405,
				downloadCount: 0,
				categorys: { '/matrixOperationRoot': '矩阵运算' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.basic.genpro_data_collect',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 943,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.columnelection.DataColumnSpecFilterNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baecbed40d00014f3ff2',
				name: 'Select Column',
				desc: '按列选择数据',
				fileSize: 64421,
				downloadCount: 35,
				categorys: { '/matrixOperationRoot': '矩阵运算' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.basic.genpro_column_selection',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201809071726',
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 942,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.booltoint.BoolToIntNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baecbed40d00014f3fee',
				name: 'Bool To Int',
				desc: '对BOOL数据进行转换，将True转换为1，False转换为0',
				fileSize: 12475,
				downloadCount: 0,
				categorys: { '/matrixOperationRoot': '矩阵运算' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.basic.genpro_booltoint',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
			{
				id: 941,
				operatorNo:
					'com.cyberinsight.cps.genpro.operator.basic.add.AddNodeFactory',
				icon: '/repo-operator/operators/icon/5bf4baebbed40d00014f3fea',
				name: 'Add',
				desc: '两个矩阵数值相加',
				fileSize: 11302,
				downloadCount: 3,
				categorys: { '/matrixOperationRoot': '矩阵运算' },
				pluginId:
					'com.cyberinsight.cps.genpro.operator.basic.genpro_add',
				author: 'CYBERINSIGHT',
				defaultVersion: '1.0.0.201811202144',
				versions: [
					'1.0.0.201811141352',
					'1.0.0.201811142221',
					'1.0.0.201811202144',
				],
			},
		],
		resultCode: 0,
		resultMessage: 'OK',
	},
	'/xxx': {
		data: {
			id: 1085,
			name: 'Divide',
			operatorNo:
				'com.cyberinsight.cps.genpro.operator.basic.divide.DivideNodeFactory',
			tags: [],
			description:
				'<div class="operator-property-wrap"><span class="title">组件属性</span><ul class="operator-property"><li><span class="key">mode</span><span class="value">选择列的方式</span></li><li><span class="key">mode11</span><span class="value">选择列的方式</span></li><li><span class="key">mode</span><span class="value">选择列的方式</span></li><li><span class="key">mode222</span><span class="value">选择列的方式</span></li><li><span class="key">mode33</span><span class="value">选择列的方式</span></li><li><span class="key">mode</span><span class="value">选择列的方式</span></li><li><span class="key">mode</span><span class="value">选择列的方式</span></li><li><span class="key">mode</span><span class="value">选择列的方式</span></li></ul></div><div class="port"><span class="title">端口</span><div class="category"><span class="title">输入端口</span><ul class="input"><li><span class="key">0 Data 输入数据 DataFrame</span></li><li><span class="key">0 Data 输入数据 DataFrame</span></li></ul><span class="title">输出端口</span><ul class="output"><li><span class="key">0 Data 输入数据 DataFrame</span></li></ul></div></div>',
			fileSize: 11247,
			installRecordCount: 1,
			downloadCount: 1,
			categories: {
				'/matrixOperationRoot': '矩阵运算',
			},
			pluginId:
				'com.cyberinsight.cps.genpro.operator.basic.genpro_divide',
			author: 'CYBERINSIGHT',
			version: '2.0.0',
			historyVersions: [
				{
					version: '2.0.0',
					fileName:
						'com.cyberinsight.cps.genpro.operator.basic.genpro_divide_2.0.0.jar',
				},
			],
			score: 0,
		},
		resultCode: 0,
		resultMessage: 'OK',
	},
}

export default mockData
