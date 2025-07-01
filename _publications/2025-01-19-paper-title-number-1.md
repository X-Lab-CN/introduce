---
title: "2.Parameter-Efficient Fine-Tuning of Large Language Models via Deconvolution in Subspace"
collection: publications
category: 2025
permalink: /publication/2025-01-19-paper-title-number-1
excerpt: '<div style="text-align: justify;">This paper proposes DCFT, a method for parameter - efficient fine - tuning of large language models using deconvolution in subspace. It overcomes rank - one decomposition limitations, shows good performance with fewer parameters, and optimizes computational efficiency.</div>'
date: 2025-01-19
venue: 'International Conference on Computational Linguistics'
paperurl: 'http://xiongyujie.cn/files/Parameter-Efficient_Fine-Tuning_of_Large_Language_Models_via_Deconvolution_in_Subspace.pdf'
citation: '<br/><div style="text-align: justify;">Parameter-Efficient Fine-Tuning of Large Language Models via Deconvolution in Subspace, J.-C. Zhang, Y.-J. Xiong*, C.-M. Xia, D.-H. Zhu, X.-H. Qiu, Proceedings of the 31st International Conference on Computational Linguistics, 2025: 3924-3935</div>'
---

<div style="text-align: justify;">Large language model (LLM) is considered a milestone towards achieving Artificial General Intelligence (AGI). With its advanced emergent capabilities, it adapt to a wide range of specific applications. Fine-tuning LLMs for various downstream tasks has become a new paradigm. Low-Rank Adaptation (LoRA) is well-known for its parameter efficiency. It can reduce the number of parameters needed to fine-tune LLMs by several orders of magnitude. However, LoRA-based approaches encounter a significant limitation due to the bottleneck imposed by rank one decomposition. As the parameters count in LLMs increase, even rank one decomposition might surpass the number of parameters truly necessary for handling more downstream tasks. In this paper, we propose a new method for ParameterEfficient Fine-Tuning (PEFT) via deconvolution in subspace, dubbed as DCFT. We innovatively use deconvolution to complete details and enhance knowledge in subspace incremental matrices, and dynamically control parameters by adjusting the kernel size, unconstrained by rank-one decomposition. Extensive experiments are conducted to validate the effectiveness of DCFT. Results show that compared to LoRA, DCFT achieve an 8× reduction in parameters, and still achieves highly impressive performance. Our code is available here: https://github.com/Godz-z/DCFT.</div>

<br/>
