---
title: "Adaptive graph-based feature normalization for facial expression recognition"
collection: publications
category: manuscripts
permalink: /publication/2023-10-20-paper-title-number-1
excerpt: '<div style="text-align: justify;">This paper presents AGFN for FER to handle data uncertainties. It uses a Poisson graph generator and GCN, and outperforms other methods, especially with mislabeled data.</div>'
date: 2023-10-20
venue: 'Engineering Applications ofArtificial Intelligence'
paperurl: 'http://xiongyujie.cn/files/Adaptive_graph-based_feature_normalization_for_facial_expression_recognition.pdf'
citation: '<br/><div style="text-align: justify;">Adaptive graph-based feature normalization for facial expression recognition, Y.-J. Xiong*, Q. Wang, Y.-T. Du and Y. Lu, Engineering Applications of Artificial Intelligence, 2024, 129: 107623</div>'
---

<div style="text-align: justify;">Facial Expression Recognition (FER) suffers from data uncertainties caused by ambiguous facial images and annotators’ subjectiveness, resulting in excursive semantic and feature covariate shifting problems. Existing works usually correct mislabeled data by estimating noise distribution, or guide network training with knowledge domain that learned from clean data, neglecting the associative relations of expression samples. In this work, we propose an Adaptive Graph-based Feature Normalization (AGFN) to protect FER models from data uncertainties by normalizing feature distributions with the association of expressions. Specifically, we propose a Poisson graph generator to adaptively construct topological graphs for samples in each minibatches via a sampling process, and correspondingly design a coordinate descent strategy to optimize proposed model. Our method outperforms state-of-the-art works with accuracies of 91.84%, 91.11% and 61.38% on three benchmark datasets, i.e., FERPlus, RAF-DB and AffectNet. Especially, when the percentage of mislabeled data significantly increases (e.g., to 20%), our method surpasses existing works by 14.09%, 21.12% and 13.67% on above datasets. Our code is publicly available in https://github.com/X-Lab-CN/AGBFN.</div>

<br/>
