---
title: "3.CRA-U: Lightweight U-Net with Component Ranking Attention for Skin Lesion Segmentation"
collection: publications
category: 2026
permalink: /publication/2026-03-21-paper-title-number-1
excerpt: '<div style="text-align: justify;">We propose CRA-U, a lightweight skin lesion segmentation framework integrating Component Ranking Attention for efficient global feature fusion with linear complexity, achieving SOTA performance with ~1/41 parameters of TransUNet.</div>'
date: 2026-03-21
venue: 'Pattern Analysis and Applications'
paperurl: 'http://xiongyujie.cn/files/CRA-U_lightweight_U-Net_with_component_ranking_attention_for_skin_lesion_segmentation.pdf'
citation: '<br/><div style="text-align: justify;">CRA-U: lightweight U-Net with component ranking attention for skin lesion segmentation, Z.-P. Ji, Y.-X. Chen, Y. -J. Xiong*,  X.-J. Xie, C. -M. Xia, Pattern Analysis and Applications, 2026, 29.1:22</div>'
---

<div style="text-align: justify;">Melanoma is a highly malignant skin disease, for which early and accurate detection of lesions is crucial, as this significantly enhances the effectiveness of treatment. Compared with conventional manual examination methods, computer-aided diagnostic techniques based on automatic image segmentation have demonstrated significant application potential due to their high reproducibility and low-cost characteristics. Transformer is widely adopted in mainstream image segmentation methods due to its superior global image modeling capabilities. However, the self-attention in Transformers suffers from <em>O(n<sup>2</sup>)</em> time complexity, creating a bottleneck for real-time skin lesion segmentation. In this paper, we propose a new framework, termed CRA-U, which aims to accelerate the segmentation of skin lesions. First, images are inputted into two preprocessing stages to reduce the impact of interference factors on lesion region segmentation. Subsequently, the preprocessed images are fed into a modified U-Net for key region segmentation. In this process, this paper proposes to achieve global feature fusion through the Component Ranking Attention (CR-Attention). This attention mechanism deeply integrates the low computational complexity of linear attention with a non-linear reweighting mechanism. Through the Ranking Function, CR-Attention effectively mitigates the deficiency of conventional linear attention in focusing capability. We evaluate our method on four public skin lesion datasets, demonstrating performance advantages over state-of-the-art methods. In addition, we evaluate the generalizability of our method on two typical medical image segmentation tasks. On the ISIC-2018 dataset, the proposed CRA-U model achieves 84.82% IoU and 91.56% Dice with only about 1/41 of the parameters of TransUNet. The code and datasets are available at https://github.com/jizhanpeng/CRA-U.</div>

<br/>
