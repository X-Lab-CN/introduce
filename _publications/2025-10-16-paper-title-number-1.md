---
title: "2.Why 1 + 1 < 1 in Visual Token Pruning: Beyond Naïve Integration via Multi-Objective Balanced Covering"
collection: publications
category: 2025
permalink: /publication/2025-10-16-paper-title-number-1
excerpt: '<div style="text-align: justify;">MoB is a training-free visual token pruning method for MLLMs that uses geometric covering theory to optimally balance prompt alignment and visual preservation, achieving high acceleration with minimal performance loss.</div>'
date: 2025-10-16
venue: 'SSRN'
paperurl: 'http://xiongyujie.cn/files/nips.pdf'
citation: '<br/><div style="text-align: justify;">Li, Yangfu,  Zhan, Hongjian, Chen, Tianyi, Xiong Yu-Jie, Liu Qi & Lu, Yue. Why 1+ 1< 1 in Visual Token Pruning: Beyond Naive Integration via Multi-Objective Balanced Covering. Advances in Neural Information Processing Systems, 38</div>'
---

<div style="text-align: justify;">Existing visual token pruning methods target prompt alignment and visual preservation with static strategies, overlooking the varying relative importance of these objectives across tasks, which leads to inconsistent performance. To address this, we derive the first closed-form error bound for visual token pruning based on the Hausdorff distance, uniformly characterizing the contributions of both objectives. Moreover, leveraging ϵ-covering theory, we reveal an intrinsic trade-off between these objectives and quantify their optimal attainment levels under a fixed budget. To practically handle this trade-off, we propose Multi-Objective Balanced Covering (MoB), which reformulates visual token pruning as a bi-objective covering problem. In this framework, the attainment trade-off reduces to budget allocation via greedy radius trading. MoB offers a provable performance bound and linear scalability with respect to the number of input visual tokens, enabling adaptation to challenging pruning scenarios. Extensive experiments show that MoB preserves 96.4% of performance for LLaVA-1.5-7B using only 11.1% of the original visual tokens and accelerates LLaVA-Next-7B by 1.3-1.5× with negligible performance loss. Additionally, evaluations on Qwen2-VL and Video-LLaVA confirm that MoB integrates seamlessly into advanced MLLMs and diverse vision-language tasks.</div>

<br/>
