---
title: "17.LoRA² : Multi-Scale Low-Rank Approximations for Fine-Tuning Large Language Models"
collection: publications
category: 2024
permalink: /publication/2024-01-12-paper-title-number-1
excerpt: '<div style="text-align: justify;">The paper proposes LoRA², which trains LoRAs on orthogonal planes, improves the importance score algorithm, and shows better performance than baselines in fine - tuning large language models with fewer parameters.</div>'
date: 2024-01-12
venue: 'arXiv'
paperurl: 'http://xiongyujie.cn/files/LoRA² _Multi-Scale_Low-Rank_Approximations_for_Fine-Tuning_Large_Language_Models.pdf'
citation: '<br/><div style="text-align: justify;">LoRA² :Multi-Scale Low-Rank Approximations for Fine-Tuning Large Language Models, J.-C. Zhang, Y.-J. Xiong*, X.-H. Qiu, D.-H. Zhu, C.-M. Xia, arxiv preprint, arxiv:2408.06854 (2024)</div>'
---

<div style="text-align: justify;">Fine-tuning large language models (LLMs) with high parameter efficiency for downstream tasks has become a new paradigm. Low-Rank Adaptation (LoRA) significantly reduces the number of trainable parameters for fine-tuning. Although it has demonstrated commendable performance, updating parameters within a single scale may not be the optimal choice for complex downstream tasks. in this paper, we extend the LoRA to multiple scales, dubbed as LoRA2. We first combine orthogonal projection theory to train a set of LoRAs in two mutually orthogonal planes. Then, we improve the importance score algorithm, which reduce parameter sensitivity score calculations by approximately 98.5%. By pruning singular values with lower importance scores, thereby enhancing adaptability to various downstream tasks. Extensive experiments are conducted on two widely used pre-trained models to validate the effectiveness of LoRA2. Results show that it significantly reduces the number of trainable parameters to just 0.72% compared to full fine-tuning, while still delivering highly impressive performance. Even when the parameters are further reduced to 0.17M, it still achieves comparable results to the baseline with 8 times more parameters. Our code is available here: https://anonymous. 4open.science/r/LoRA-2-5B4C</div>

<br/>
