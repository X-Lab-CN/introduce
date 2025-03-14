---
title: "两阶段问答范式的生物医学事件触发词检测"
collection: publications
category: manuscripts
permalink: /publication/2024-05-20-paper-title-number-2
excerpt: '<div style="text-align: justify;">This paper proposes a biomedical event trigger detection method based on a two - stage question - answering paradigm. It uses syntactic - distance - based attention and word - entity - event co - occurrence features to address existing problems in trigger detection. Experiments on the MLEE corpus show that the model outperforms baseline models, with an F1 - score of 81.39%, and the author also plans to explore further improvements in the future.</div>'
date: 2024-05-20
venue: '计算机工程与应用'
paperurl: 'http://xiongyujie.cn/files/两阶段问答范式的生物医学事件触发词检测.pdf'
citation: '<br/><div style="text-align: justify;">两阶段问答范式的生物医学事件触发词检测, 行帅，熊玉洁*，苏前敏*，黄继汉, 计算机工程与应用, 网络首发 (2023)</div>'
---

<div style="text-align: justify;">现有的生物医学事件触发词检测存在以下缺陷：1）保留了与触发词无关的冗余信息；2）忽略了实 体与事件之间的潜在关联性；3）传统方法容易受到数据稀缺性的影响。针对上述问题，提出了一种两阶段问 答范式的生物医学事件触发词检测方法。在事件类型识别阶段，采用基于句法距离的注意力捕获更有意义的 上下文特征，排除无关信息的干扰；为了有效利用实体中的潜在特征，采用全局统计的单词-实体-事件共现 特征，指导事件类型感知注意力挖掘词与事件之间的强关联性。在触发词定位阶段，根据识别出的事件类型， 制定问题回答该事件对应的触发词索引，从而利用丰富的问答数据库实现数据增强。在MLEE 语料库上的结 果表明，两阶段问答范式、句法距离和事件类型感知注意力都有效地提升了模型性能，所提出的模型取得了 81.39%的 F1 分数，并在多个事件类型上的详细结果均优于其他基线模型。</div>
<br/>
