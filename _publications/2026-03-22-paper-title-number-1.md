---
title: "2.Wavelet-Based MLP for Efficient Sensor Signal Measurement and Forecasting"
collection: publications
category: 2026
permalink: /publication/2026-03-22-paper-title-number-1
excerpt: '<div style="text-align: justify;">Real-world time series measurement faces high complexity, noise sensitivity, and poor interpretability. We propose WaveMLP, a lightweight wavelet-MLP framework with high accuracy, efficiency, and interpretability for edge deployment.</div>'
date: 2026-03-22
venue: 'IEEE Transactions on Instrumentation and Measurement'
paperurl: 'http://xiongyujie.cn/files/Wavelet-Based_MLP_for_Efficient_Sensor_Signal_Measurement_and_Forecasting.pdf'
citation: '<br/><div style="text-align: justify;">Wavelet-Based MLP for Efficient Sensor Signal Measurement and Forecasting, Z. Zhou, Y. -J. Xiong, C. -M. Xia, IEEE Transactions on Instrumentation and Measurement, 2026, 75:1-11</div>'
---

<div style="text-align: justify;">Measuring and predicting in real-world time series is a crucial task. However, the existing approaches often suffer from high computational complexity, are highly sensitive to noise, and lack interpretability, which hinders their effectiveness in practical applications. In this article, we propose WaveMLP, a novel lightweight framework with wavelet decomposition and multilayer perceptrons (MLPs). Unlike conventional models, WaveMLP fundamentally enhances measurement accuracy by decomposing raw sensor signals into low-frequency physical quantities and high-frequency measurement noise through the discrete wavelet transform (DWT). WaveMLP comprises three key components. First, it employs a computationally efficient perfect reconstruction Haar wavelet to capture abrupt changes in signals and decompose them into low- and high-frequency components. Next, a parameter-efficient MLP module processes these components: separate low- and high-frequency MLPs extract features from their respective frequency bands, ensuring high inference speed. Finally, an adaptive fusion mechanism nonlinearly combines the low- and high-frequency components, enhancing model robustness and preventing overfitting. The approach achieves two key advances in Instrumentation &amp; Measurement (I&amp;M): 1) signal feature capture capability. WaveMLP separates the low- and high-frequency components of sensor signals, effectively capturing the main and nonlinear features of the signal to improve prediction performance and 2) real-time deployment capability for edge instrumentation. WaveMLP reduces training time by 20%–40%. Validated on eight real-world datasets, WaveMLP matches SOTA while reducing parameters by orders of magnitude. This work establishes wavelet-MLP as a new paradigm for resource-constrained measurement systems.</div>

<br/>
