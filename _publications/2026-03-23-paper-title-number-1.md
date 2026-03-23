---
title: "1.Gradient-Direction-Aware Density Control for 3D Gaussian Splatting"
collection: publications
category: 2026
permalink: /publication/2026-03-23-paper-title-number-1
excerpt: '<div style="text-align: justify;">This paper proposes GDAGS, a gradient-direction-aware density control method that mitigates over-reconstruction and over-densification in 3D Gaussian Splatting for superior rendering quality with compact scene representations.</div>'
date: 2026-03-23
venue: 'International Conference on Learning Representations'
paperurl: 'http://xiongyujie.cn/files/Gradient-Direction-Aware_Density Control_for_3D_Gaussian_Splatting.pdf'
citation: '<br/><div style="text-align: justify;">Gradient-Direction-Aware Density Control for 3D Gaussian Splatting, Z. Zhou, Y.-J. Xiong*, C.-M. Xia, in Proceedings of the International Conference on Learning Representations, 2026(accepted)</div>'
---

<div style="text-align: justify;">The emergence of 3D Gaussian Splatting (3DGS) has significantly advanced Novel View Synthesis (NVS) through explicit scene representation, enabling real-time photorealistic rendering. However, existing approaches manifest two critical limitations in complex scenarios: (1) Over-reconstruction occurs when persistent large Gaussians cannot meet adaptive splitting thresholds during density control. This is exacerbated by conflicting gradient directions that prevent effective splitting of these Gaussians; (2) Over-densification of Gaussians occurs in regions with aligned gradient aggregation, leading to redundant component proliferation. This redundancy significantly increases memory overhead due to unnecessary data retention. We present Gradient-Direction-Aware Gaussian Splatting (GDAGS) to address these challenges. Our key innovations: the Gradient Coherence Ratio (GCR), computed through normalized gradient vector norms, which explicitly discriminates Gaussians with concordant versus conflicting gradient directions; and a nonlinear dynamic weighting mechanism leverages the GCR to enable gradient-direction-aware density control. Specifically, GDAGS prioritizes conflicting-gradient Gaussians during splitting operations to enhance geometric details while suppressing redundant concordant-direction Gaussians. Conversely, in cloning processes, GDAGS promotes concordant-direction Gaussian densification for structural completion while preventing conflicting-direction Gaussian overpopulation. Comprehensive evaluations across diverse real-world benchmarks demonstrate that GDAGS achieves superior rendering quality while effectively mitigating over-reconstruction, suppressing over-densification, and constructing compact scene representations.</div>

<br/>
