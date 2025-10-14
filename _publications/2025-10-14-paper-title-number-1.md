---
title: "4.Sugar-Coated Poison: Benign Generation Unlocks Jailbreaking"
collection: publications
category: 2025
permalink: /publication/2025-10-14-paper-title-number-1
excerpt: '<div style="text-align: justify;">The paper proposes SCP, a jailbreak attack that exploits "Defense Threshold Decay"—where prolonged benign generation reduces an LLM’s attention to input—enabling stealthy shifts to harmful outputs; it also introduces POSD, a part-of-speech–based defense.</div>'
date: 2025-10-14
venue: 'Conference on Empirical Methods in Natural Language Processing'
paperurl: 'http://xiongyujie.cn/files/wuyh.pdf'
citation: '<br/><div style="text-align: justify;">Sugar-Coated Poison: Benign Generation Unlocks Jailbreaking, Wu, Yu-Hang and Xiong, Yu-Jie and Zhang, Hao and Zhang, Jia-Chen and Zhou, Zheng, In Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing (EMNLP).2025</div>'
---

<div style="text-align: justify;">With the increasingly deep integration of large language models (LLMs) across diverse domains, the effectiveness of their safety mechanisms is encountering severe challenges. Currently, jailbreak attacks based on prompt engineering have become a major safety threat. However, existing methods primarily rely on black-box manipulation of prompt templates, resulting in poor interpretability and limited generalization. To break through the bottleneck, this study first introduces the concept of Defense Threshold Decay (DTD), revealing the potential safety impact caused by LLMs’ benign generation: as benign content generation in LLMs increases, the model’s focus on input instructions progressively diminishes. Building on this insight, we propose the Sugar-Coated Poison (SCP) attack paradigm, which uses a "semantic reversal" strategy to craft benign inputs that are opposite in meaning to malicious intent. This strategy induces the models to generate extensive benign content, thereby enabling adversarial reasoning to bypass safety mechanisms. Experiments show that SCP outperforms existing baselines. Remarkably, it achieves an average attack success rate of 87.23% across six LLMs. For defense, we propose Part-of-Speech Defense (POSD), leveraging verb-noun dependencies for syntactic analysis to enhance safety of LLMs while preserving their generalization ability. Our code is available at https://github.com/VovyH/SCP.</div>

<br/>
