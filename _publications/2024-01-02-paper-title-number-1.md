---
title: "27.Chain-of-LoRA: Enhancing the Instruction Fine-Tuning Performance of Low-Rank Adaptation on Diverse Instruction Set"
collection: publications
category: 2024
permalink: /publication/2024-01-02-paper-title-number-1
excerpt: '<div style="text-align: justify;">The paper proposes the Chain-of-LoRA framework, which trains a task - selection LoRA to classify instruction types and task - specific LoRAs for tasks. Experiments show it can achieve performance comparable to direct instruction fine - tuning, balancing performance and disk storage for resource - constrained users.</div>'
date: 2024-01-02
venue: 'IEEE SIGNAL PROCESSING LETTERS'
paperurl: 'http://xiongyujie.cn/files/Chain-of-lora Enhancing the instruction fine-tuning performance of low-rank adaptation on diverse instruction set.pdf'
citation: '<br/><div style="text-align: justify;">Chain-of-LoRA: Enhancing the Instruction Fine-Tuning Performance of Low-Rank Adaptation on Diverse Instruction Set,Qiu Xihe and Hao Teqi and Shi Shaojie and Tan Xiaoyu* and Xiong Yu-Jie,IEEE Signal Processing Letters,2024,31,875-879.</div>'
---

<div style="text-align: justify;">Recently, large language models (LLMs) with conversational-style interaction, such as ChatGPT and Claude, have gained significant importance in the advancement of artificial general intelligence (AGI). However, the extensive resource requirements during pre-training, instruction fine-tuning (IF), and reinforcement learning through human feedback (RLHF) pose challenges, particularly for individuals and studios with limited resources. Moreover, sensitive data that cannot be deployed on remote training platforms or queried through APIs further exacerbates this issue. To address these limitations, researchers have introduced a parameter-efficient framework called low-rank adaptation (LoRA) for IF on LLMs. However, training individual LoRA networks faces capacity constraints and struggles to adapt to large domainswith significant distributional shifts across different tasks. In this letter, we propose a novel framework called chain-of-LoRA to enhance the IF performance of LoRA. Our approach involves training a LoRA network to classify the instruction type and then utilizing task-specific LoRA networks to accomplish the respective tasks. By training multiple task-specific LoRAnetworks,we exploit a trade-off between performance and disk storage, leveraging the easily expandable and cost-effective nature of disk storage compared to precious graphical resources. Our experimental results demonstrate that our proposed framework achieves comparable performance to typical direct IF on LLMs.</div>

<br/>
