---
title: "Free Lunch: Frame-level Contrastive Learning with Text Perceiver for Robust Scene Text Recognition in Lightweight Models"
collection: publications
category: conferences
permalink: /publication/2024-01-19-paper-title-number-1
excerpt: '<div style="text-align: justify;">This paper presents a frame - level contrastive learning framework with a Text Perceiver for lightweight scene text recognition models, improving performance, especially in low - quality scenarios, with effectiveness verified by experiments.</div>'
date: 2024-01-19
venue: 'ACM International Conference on Multimedia'
paperurl: 'http://xiongyujie.cn/files/Free_Lunch_Frame-level_Contrastive_Learning_with_Text_Perceiver_for_Robust_Scene_Text_Recognition_in_Lightweight_Models.pdf'
citation: '<br/><div style="text-align: justify;">Free Lunch: Frame-level Contrastive Learning with Text Perceiver for Robust Scene Text Recognition in Lightweight Models, H.-J. Zhan, Y.-F. Li*, Y.-J. Xiong, Umapada Pal, Y. Lu, Proceedings of the 32nd ACM International Conference on Multimedia, 2024</div>'
---

<div style="text-align: justify;">Lightweight models play an important role in real-life applications, especially in the recent mobile device era. However, due to limited network scale and low-quality images, the performance of lightweight models on Scene Text Recognition (STR) tasks is still much to be improved. Recently, contrastive learning has shown its power in many areas, with promising performances without additional computational cost. Based on these observations, we propose a new efficient and effective frame-level contrastive learning (FLCL) framework for lightweight STR models. The FLCL framework consists ofa backbone to extract basic features, a Text Perceiver Module (TPM) to focus on text-relevant representations, and a FLCL loss to update the network. The backbone can be any feature extraction architecture. The TPM is an innovative Mamba-based structure that is designed to suppress features irrelevant to the text content from the backbone. Unlike existing word-level contrastive learning, we look into the nature of the STR task and propose the frame-level contrastive learning loss, which can work well with the famous Connectionist Temporal Classification loss. We conduct experiments on six well-known STR benchmarks as well as a new low-quality dataset. Compared to vanilla contrastive learning and other non-parameter methods, the FLCL framework significantly outperforms others on all datasets, especially the low-quality dataset. In addition, character feature visualization demonstrates that the proposed method can yield more discriminative character features for visually similar characters, which also substantiates the efficacy of the proposed methods. Codes and the low-quality dataset will be available soon.</div>

<br/>
