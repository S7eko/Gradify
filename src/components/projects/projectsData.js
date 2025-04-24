const projects = [
  {
    id: "ai",
    title: "الذكاء الاصطناعي",
    description: "دليل متكامل لمشروع تخرج في الذكاء الاصطناعي يشمل كل الخطوات من الفكرة حتى التسليم النهائي",
    imageUrl: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
    tools: [
      { name: "Python", description: "لغة البرمجة الرئيسية للذكاء الاصطناعي", link: "https://python.org" },
      { name: "TensorFlow", description: "إطار عمل لتعلم الآلة من جوجل", link: "https://tensorflow.org" },
      { name: "OpenCV", description: "مكتبة معالجة الصور والفيديو", link: "https://opencv.org" },
      { name: "Scikit-learn", description: "مكتبة لخوارزميات تعلم الآلة", link: "https://scikit-learn.org" }
    ],
    steps: [
      {
        title: "فهم الأساسيات",
        details: [
          "تعلم مفاهيم الذكاء الاصطناعي وتعلم الآلة",
          "افهم الفرق بين التعلم الخاضع للإشراف وغير الخاضع للإشراف",
          "تعرف على أنواع المشاريع الممكنة (تصنيف، تنبؤ، تجميع...)"
        ],
        resources: [
          { type: "كتاب", title: "Artificial Intelligence: A Modern Approach", link: "#" },
          { type: "كورس", title: "Intro to AI - Udacity", link: "#" }
        ]
      },
      {
        title: "تحديد المشروع",
        details: [
          "اختر مجالاً محدداً (معالجة لغة طبيعية، رؤية حاسوبية...)",
          "حدد مجموعة بيانات مناسبة",
          "صمم خطة عمل زمنية"
        ],
        resources: [
          { type: "موقع", title: "Kaggle Datasets", link: "https://kaggle.com/datasets" },
          { type: "أداة", title: "Trello لإدارة المشروع", link: "#" }
        ]
      },
      {
        title: "التنفيذ العملي",
        details: [
          "قم بتنظيف البيانات وتحضيرها للتحليل",
          "قم ببناء النموذج الأولي",
          "قم بتدريب النموذج وتحسينه"
        ],
        resources: [
          { type: "مثال كود", title: "TensorFlow Tutorials", link: "https://www.tensorflow.org/tutorials" }
        ]
      },
      {
        title: "التقييم والتحسين",
        details: [
          "قم بتقييم أداء النموذج باستخدام مقاييس دقيقة",
          "قم بتحسين النموذج بناءً على النتائج",
          "قم بمقارنة النموذج مع نماذج أخرى"
        ],
        resources: [
          { type: "مقال", title: "Evaluation Metrics for ML Models", link: "#" }
        ]
      }
    ],
    projectExamples: [
      {
        title: "نظام تصنيف الصور الطبية",
        description: "تصنيف صور الأشعة إلى سليمة أو مصابة باستخدام شبكات عصبية تلافيفية",
        technologies: ["CNN", "TensorFlow", "Python"],
        githubLink: "#"
      },
      {
        title: "نظام التوصية",
        description: "نظام توصية للمنتجات بناءً على سجل المستخدم",
        technologies: ["Collaborative Filtering", "Scikit-learn"],
        githubLink: "#"
      },
      {
        title: "معالجة اللغة الطبيعية",
        description: "نظام لتحليل المشاعر في النصوص العربية",
        technologies: ["NLTK", "Transformers"],
        githubLink: "#"
      }
    ],
    reportTemplate: {
      structure: [
        "الصفحة العنوانية",
        "ملخص تنفيذي (لا يزيد عن 250 كلمة)",
        "المقدمة والأهداف (شرح المشكلة وأهمية الحل)",
        "الخلفية النظرية (المفاهيم والمبادئ العلمية)",
        "المنهجية والتطبيق (الخطوات والأدوات المستخدمة)",
        "النتائج والتحليل (الرسوم البيانية والجداول)",
        "الخاتمة والتوصيات (النتائج المستقبلية)",
        "المراجع (باستخدام أسلوب IEEE أو APA)"
      ],
      tips: [
        "استخدم لغة أكاديمية واضحة ومختصرة",
        "أضف رسومات توضيحية للنتائج (على الأقل 5 رسومات)",
        "وثق جميع المصادر والمراجع بدقة",
        "استخدم العناوين الفرعية لتنظيم المحتوى",
        "خصص فصل كامل لتحليل النتائج والمقارنات"
      ]
    },
    presentationTips: [
      "استخدم 10-15 شريحة كحد أقصى (مدة العرض 15-20 دقيقة)",
      "ركز على النتائج والتطبيق العملي (50% من الوقت)",
      "تدرب على العرض مسبقاً (3 مرات على الأقل)",
      "استخدم الرسوم المتحركة باعتدال",
      "أعد إجابات لأسئلة متوقعة من اللجنة",
      "خصص شريحة للصعوبات وكيفية التغلب عليها"
    ],
    evaluationCriteria: [
      { criterion: "الأصالة والابتكار", weight: "20%", details: "جدة الفكرة وتميزها عن الحلول الموجودة" },
      { criterion: "التنفيذ التقني", weight: "30%", details: "جودة الكود وكفاءة الخوارزميات" },
      { criterion: "جودة التوثيق", weight: "20%", details: "شمولية التقرير ودقة التوثيق" },
      { criterion: "العرض التقديمي", weight: "15%", details: "وضوح العرض وقوة الإقناع" },
      { criterion: "الفائدة العملية", weight: "15%", details: "إمكانية التطبيق على أرض الواقع" }
    ],
    commonMistakes: [
      "اختيار مشروع معقد جداً أو بسيط جداً",
      "عدم توثيق المصادر بشكل صحيح",
      "إهمال الجانب النظري في التقرير",
      "عدم اختبار النموذج على بيانات كافية",
      "التسرع في اختيار مجموعة البيانات"
    ],
    successTips: [
      "ابدأ مبكراً وخصص وقتاً كافياً لكل مرحلة",
      "استشر المشرف بشكل منتظم",
      "احتفظ بنسخ احتياطية من العمل",
      "قم بتوثيق كل خطوة أثناء التنفيذ",
      "اختبر النموذج على بيانات متنوعة"
    ]
  },
  {
    id: "data-analysis",
    title: "تحليل البيانات",
    description: "دليل متكامل لمشروع تخرج في تحليل البيانات يشمل كل الخطوات من الفكرة حتى التسليم النهائي مع التركيز على الجوانب العملية والتطبيقية",
    imageUrl: "https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=600",

    tools: [
      { name: "Python", description: "لغة البرمجة الرئيسية لتحليل البيانات", link: "https://python.org" },
      { name: "Pandas", description: "مكتبة لتحليل البيانات وحساب الإحصائيات", link: "https://pandas.pydata.org" },
      { name: "NumPy", description: "مكتبة العمليات الحسابية للبيانات", link: "https://numpy.org" },
      { name: "Power BI", description: "أداة لتحليل البيانات وعرضها بصرياً", link: "https://powerbi.microsoft.com" },
      { name: "Tableau", description: "أداة متقدمة لتصور البيانات", link: "https://www.tableau.com" },
      { name: "Jupyter Notebook", description: "بيئة تفاعلية لتحليل البيانات", link: "https://jupyter.org" }
    ],
    steps: [
      {
        title: "جمع البيانات",
        details: [
          "ابحث عن مصادر بيانات موثوقة (حكومية، أكاديمية، صناعية)",
          "استخدم APIs للحصول على البيانات بشكل برمجي",
          "تأكد من تنسيق البيانات وجودتها قبل البدء بالتحليل",
          "قم بتخزين البيانات بشكل منظم يسهل الرجوع إليها"
        ],
        resources: [
          { type: "موقع", title: "Kaggle Datasets", link: "https://kaggle.com/datasets" },
          { type: "موقع", title: "Google Dataset Search", link: "https://datasetsearch.research.google.com" },
          { type: "أداة", title: "BeautifulSoup لسحب البيانات", link: "https://www.crummy.com/software/BeautifulSoup/" }
        ]
      },
      {
        title: "تنظيف البيانات",
        details: [
          "تعامل مع القيم المفقودة (حذف أو استبدال)",
          "قم بتوحيد تنسيق البيانات (التواريخ، العملات، إلخ)",
          "اكتشف القيم المتطرفة وتعامَل معها",
          "قم بتحويل البيانات إلى صيغة مناسبة للتحليل"
        ],
        resources: [
          { type: "كتاب", title: "Python for Data Analysis", link: "#" },
          { type: "كورس", title: "Data Cleaning - DataCamp", link: "#" }
        ]
      },
      {
        title: "تحليل البيانات",
        details: [
          "قم بتحليل البيانات الوصفية (المتوسط، الوسيط، الانحراف المعياري)",
          "استخدم التحليل الاستكشافي (EDA) لفهم البيانات",
          "قم بإنشاء تصورات بيانية للأنماط والعلاقات",
          "اختبر الفرضيات الإحصائية عند الحاجة"
        ],
        resources: [
          { type: "دورة", title: "Data Science - Coursera", link: "#" },
          { type: "مكتبة", title: "Seaborn للتصورات", link: "https://seaborn.pydata.org" }
        ]
      },
      {
        title: "عرض النتائج",
        details: [
          "قم بإنشاء لوحات تحكم تفاعلية",
          "استخدم أنواع الرسوم البيانية المناسبة لكل نوع بيانات",
          "أبرز النتائج الرئيسية والتوصيات",
          "قم بإعداد تقرير احترافي يلخص النتائج"
        ],
        resources: [
          { type: "أداة", title: "Power BI Documentation", link: "https://docs.microsoft.com/en-us/power-bi/" },
          { type: "كتاب", title: "Storytelling with Data", link: "#" }
        ]
      }
    ],
    projectExamples: [
      {
        title: "تحليل بيانات مبيعات",
        description: "تحليل بيانات مبيعات سنوية وتوقع الاتجاهات المستقبلية باستخدام السلاسل الزمنية",
        technologies: ["Pandas", "Power BI", "Prophet"],
        githubLink: "#"
      },
      {
        title: "تحليل مشاعر وسائل التواصل",
        description: "تحليل مشاعر المستخدمين على تويتر تجاه منتج معين",
        technologies: ["TextBlob", "Matplotlib", "NLTK"],
        githubLink: "#"
      },
      {
        title: "تحليل أداء رياضي",
        description: "تحليل أداء لاعبي كرة القدم باستخدام بيانات إحصائية",
        technologies: ["Pandas", "Seaborn", "Jupyter"],
        githubLink: "#"
      }
    ],
    reportTemplate: {
      structure: [
        "الصفحة العنوانية (العنوان، الأسماء، التاريخ)",
        "ملخص تنفيذي (ملخص سريع بالنتائج الرئيسية)",
        "المقدمة والأهداف (خلفية المشكلة وأهمية التحليل)",
        "البيانات والمنهجية (مصادر البيانات وأدوات التحليل)",
        "التحليل والإحصائيات (النتائج التفصيلية مع الرسوم)",
        "النتائج والتوصيات (الاستنتاجات والتطبيقات العملية)",
        "المراجع (جميع المصادر المستخدمة)"
      ],
      downloadLink: "#",
      tips: [
        "استخدم رسومات بيانية عالية الجودة لتوضيح النتائج",
        "اضمن استنتاجات عملية قابلة للتطبيق",
        "وضح كيف يمكن استخدام النتائج في اتخاذ القرارات",
        "خصص قسمًا للقيود والتحديات التي واجهتها",
        "أرفق الكود البرمجي كملحق إذا لزم الأمر"
      ]
    },
    presentationTips: [
      "استخدم 8-10 شرائح كحد أقصى (10 دقائق عرض)",
      "ركز على النتائج وتوصياتك (70% من العرض)",
      "تمرّن على تقديم المشروع بشكل عملي وواضح",
      "استخدم التصاميم الاحترافية للشرائح",
      "أبرز القيمة المضافة من التحليل",
      "كن مستعداً لأسئلة حول منهجية التحليل"
    ],
    evaluationCriteria: [
      { criterion: "دقة التحليل", weight: "30%", details: "صحة الأساليب الإحصائية والنتائج" },
      { criterion: "العرض التقديمي", weight: "25%", details: "جودة الشرائح وقوة العرض" },
      { criterion: "التنفيذ التقني", weight: "25%", details: "كفاءة الكود وجودة التصورات" },
      { criterion: "التوثيق الشامل", weight: "20%", details: "شمولية التقرير ودقة التوثيق" }
    ],
    datasets: [
      {
        name: "COVID-19 Data",
        description: "بيانات عالمية عن جائحة كوفيد-19",
        link: "https://github.com/owid/covid-19-data"
      },
      {
        name: "World Bank Data",
        description: "بيانات اقتصادية واجتماعية من البنك الدولي",
        link: "https://data.worldbank.org"
      }
    ],
    successStories: [
      "مشروع تحليل بيانات ساعد شركة على زيادة مبيعاتها بنسبة 20%",
      "تحليل أدى إلى تحسين كفاءة سلسلة التوريد لمصنع"
    ]
  },
  {
    id: "computer-vision",
    title: "رؤية الحاسوب",
    description: "دليل متكامل لمشروع تخرج في رؤية الحاسوب يشمل كل الخطوات من الفكرة حتى التسليم النهائي مع التركيز على التطبيقات العملية",
    imageUrl: "https://images.pexels.com/photos/31767816/pexels-photo-31767816/free-photo-of-creative-workspace-with-paintbrushes-and-keyboard.jpeg?auto=compress&cs=tinysrgb&w=600",

    tools: [
      { name: "Python", description: "لغة البرمجة الرئيسية لرؤية الحاسوب", link: "https://python.org" },
      { name: "OpenCV", description: "مكتبة معالجة الصور والفيديو", link: "https://opencv.org" },
      { name: "Keras", description: "إطار عمل لتطوير الشبكات العصبية", link: "https://keras.io" },
      { name: "PyTorch", description: "إطار عمل لتعلم الآلة من فيسبوك", link: "https://pytorch.org" },
      { name: "TensorFlow", description: "إطار عمل لتعلم الآلة من جوجل", link: "https://tensorflow.org" },
      { name: "Dlib", description: "مكتبة للتعرف على الوجوه ومعالم الوجه", link: "http://dlib.net" }
    ],
    steps: [
      {
        title: "تحليل الصور والفيديو",
        details: [
          "تعلم أساسيات معالجة الصور (التصفية، التحويل، إلخ)",
          "طوّر مهاراتك في تحليل الفيديو ومعالجة الإطارات",
          "تدرب على استخدام مكتبات معالجة الصور الأساسية",
          "قم بتنفيذ مشاريع صغيرة لاختبار فهمك"
        ],
        resources: [
          { type: "موقع", title: "OpenCV Tutorials", link: "https://docs.opencv.org/4.x/d9/df8/tutorial_root.html" },
          { type: "كتاب", title: "Learning OpenCV", link: "#" }
        ]
      },
      {
        title: "التعلم العميق للرؤية الحاسوبية",
        details: [
          "افهم أساسيات الشبكات العصبية التلافيفية (CNN)",
          "تعلم كيفية تدريب النماذج على مجموعات البيانات",
          "قم بتحسين النماذج باستخدام تقنيات مختلفة",
          "استخدم نماذج مدربة مسبقاً (Transfer Learning)"
        ],
        resources: [
          { type: "كورس", title: "Deep Learning for CV - Coursera", link: "#" },
          { type: "مقال", title: "CNN Architectures Review", link: "#" }
        ]
      },
      {
        title: "تطبيق عملي",
        details: [
          "اختر مشروعاً عملياً يحل مشكلة حقيقية",
          "قم بجمع أو اختيار مجموعة بيانات مناسبة",
          "صمم النموذج وقم بتدريبه",
          "قيم أداء النموذج على بيانات اختبار"
        ],
        resources: [
          { type: "موقع", title: "Papers With Code", link: "https://paperswithcode.com" },
          { type: "مجتمع", title: "Kaggle Competitions", link: "https://kaggle.com" }
        ]
      },
      {
        title: "النشر والتكامل",
        details: [
          "قم بتصدير النموذج للاستخدام في تطبيقات أخرى",
          "دمج النموذج مع نظام حقيقي إذا لزم الأمر",
          "قياس الأداء في البيئة الحقيقية",
          "تحسين النموذج بناءً على الملاحظات"
        ],
        resources: [
          { type: "أداة", title: "TensorFlow Serving", link: "https://www.tensorflow.org/tfx/guide/serving" },
          { type: "مقال", title: "Deploying CV Models", link: "#" }
        ]
      }
    ],
    projectExamples: [
      {
        title: "نظام التعرف على الوجه",
        description: "نظام للتعرف على الوجوه باستخدام تقنيات رؤية الحاسوب والتعلم العميق",
        technologies: ["OpenCV", "Dlib", "Face Recognition"],
        githubLink: "#"
      },
      {
        title: "كشف الأشياء في الوقت الحقيقي",
        description: "نظام يكشف عن أشياء محددة في بث فيديو مباشر",
        technologies: ["YOLO", "OpenCV", "Python"],
        githubLink: "#"
      },
      {
        title: "تحليل حركة المرور",
        description: "نظام لتحليل كثافة المرور من كاميرات المراقبة",
        technologies: ["OpenCV", "Tracking Algorithms"],
        githubLink: "#"
      }
    ],
    reportTemplate: {
      structure: [
        "الصفحة العنوانية",
        "ملخص تنفيذي",
        "المقدمة والأهداف (المشكلة والحل المقترح)",
        "الخلفية النظرية (الشبكات العصبية، تقنيات الرؤية)",
        "المنهجية والتطبيق (مجموعة البيانات، تصميم النموذج)",
        "النتائج والتحليل (مقاييس الأداء، المقارنات)",
        "الخاتمة والتوصيات (التحسينات المستقبلية)",
        "المراجع (المصادر العلمية والأدوات)"
      ],
      downloadLink: "#",
      tips: [
        "استخدم رسومات توضيحية عالية الجودة للنتائج",
        "افصل بين الأجزاء النظرية والتطبيقية بوضوح",
        "أرفق أمثلة على مدخلات ومخرجات النظام",
        "ناقش القيود والتحديات بالتفصيل",
        "قدم مقارنة مع حلول أخرى موجودة"
      ]
    },
    presentationTips: [
      "ركز على النتائج والتطبيق العملي (استخدم مقاطع فيديو)",
      "استخدم أمثلة مرئية لتوضيح عمل النظام",
      "وضح الفرق بين أداء النظام والطرق التقليدية",
      "كن مستعداً لعرض تجريبي مباشر إذا أمكن",
      "خصص وقتاً للأسئلة التقنية المتوقعة"
    ],
    evaluationCriteria: [
      { criterion: "دقة النموذج", weight: "40%", details: "الدقة على بيانات الاختبار والمقارنة مع المعايير" },
      { criterion: "الأصالة في المشروع", weight: "20%", details: "إبداع الفكرة وتطبيقها العملي" },
      { criterion: "جودة التوثيق", weight: "20%", details: "شمولية التقرير ودقة التوثيق" },
      { criterion: "العرض التقديمي", weight: "20%", details: "وضوح العرض وجودة الشرائح" }
    ],
    datasets: [
      {
        name: "COCO Dataset",
        description: "مجموعة بيانات كبيرة للتعرف على الأشياء",
        link: "https://cocodataset.org"
      },
      {
        name: "ImageNet",
        description: "مجموعة بيانات ضخمة للتصنيف البصري",
        link: "https://www.image-net.org"
      }
    ],
    researchPapers: [
      {
        title: "Recent Advances in Deep Learning for Object Detection",
        link: "#"
      }
    ]
  },
  {
    id: "networking",
    title: "الشبكات",
    description: "دليل متكامل لمشروع تخرج في الشبكات يشمل كل الخطوات من الفكرة حتى التسليم النهائي مع التركيز على التصميم والأمان",
    imageUrl: "https://images.pexels.com/photos/1624895/pexels-photo-1624895.jpeg?auto=compress&cs=tinysrgb&w=600",

    tools: [
      { name: "Wireshark", description: "أداة لتحليل الشبكات والكشف عن المشاكل", link: "https://www.wireshark.org" },
      { name: "Cisco Packet Tracer", description: "أداة لتصميم ومحاكاة شبكات سيسكو", link: "https://www.netacad.com" },
      { name: "GNS3", description: "منصة متقدمة لمحاكاة الشبكات", link: "https://www.gns3.com" },
      { name: "Nmap", description: "أداة مسح الشبكات واكتشاف الثغرات", link: "https://nmap.org" },
      { name: "Postman", description: "أداة لاختبار واجهات برمجة التطبيقات API", link: "https://www.postman.com" },
      { name: "Ubuntu Server", description: "نظام تشغيل للخوادم والشبكات", link: "https://ubuntu.com/server" }
    ],
    steps: [
      {
        title: "تصميم الشبكة",
        details: [
          "حدد متطلبات الشبكة واحتياجات المستخدمين",
          "اختر البنية التحتية المناسبة (سلكية، لاسلكية، مختلطة)",
          "صمم مخطط الشبكة مع تحديد جميع المكونات",
          "خطط لاستراتيجية التوسع المستقبلي"
        ],
        resources: [
          { type: "موقع", title: "Cisco Networking Academy", link: "https://www.netacad.com" },
          { type: "كتاب", title: "Network Design Essentials", link: "#" }
        ]
      },
      {
        title: "التنفيذ والمحاكاة",
        details: [
          "قم بمحاكاة الشبكة باستخدام الأدوات المناسبة",
          "اختبر أداء الشبكة تحت أحمال مختلفة",
          "حدد نقاط الضعف ومشاكل الأداء",
          "قم بإجراء التحسينات اللازمة على التصميم"
        ],
        resources: [
          { type: "أداة", title: "Cisco Packet Tracer Guide", link: "#" },
          { type: "دليل", title: "GNS3 Documentation", link: "https://docs.gns3.com" }
        ]
      },
      {
        title: "الأمان الشبكي",
        details: [
          "قم بتقييم مخاطر أمان الشبكة",
          "خطط لاستراتيجية الحماية (جدران نارية، أنظمة كشف التسلل)",
          "نفذ سياسات الأمان الأساسية (ACLs، VLANs)",
          "اختبر اختراق الشبكة لاكتشاف الثغرات"
        ],
        resources: [
          { type: "كورس", title: "Network Security - Cybrary", link: "#" },
          { type: "أداة", title: "Kali Linux for Penetration Testing", link: "https://www.kali.org" }
        ]
      },
      {
        title: "التوثيق والتسليم",
        details: [
          "قم بتوثيق جميع إعدادات الشبكة",
          "أعد دليلاً للمستخدمين والإداريين",
          "جهز عرضاً توضيحياً لأداء الشبكة",
          "خطط لاستراتيجية الصيانة الدورية"
        ],
        resources: [
          { type: "قالب", title: "Network Documentation Template", link: "#" },
          { type: "دليل", title: "Best Practices for Network Docs", link: "#" }
        ]
      }
    ],
    projectExamples: [
      {
        title: "تصميم شبكة لمؤسسة",
        description: "تصميم شبكة متكاملة لمؤسسة متوسطة الحجم مع مراعاة الأمان والأداء",
        technologies: ["Cisco", "VLANs", "Firewalls"],
        githubLink: "#"
      },
      {
        title: "نظام مراقبة الشبكة",
        description: "نظام لمراقبة أداء الشبكة والكشف عن الأعطال",
        technologies: ["SNMP", "Grafana", "Prometheus"],
        githubLink: "#"
      },
      {
        title: "تحليل أمان الشبكة",
        description: "تحليل ثغرات أمان الشبكة وتقديم توصيات للتحسين",
        technologies: ["Nmap", "Wireshark", "Metasploit"],
        githubLink: "#"
      }
    ],
    reportTemplate: {
      structure: [
        "الصفحة العنوانية",
        "ملخص تنفيذي (ملخص سريع للحل المقترح)",
        "المقدمة والأهداف (وصف المشكلة والحل)",
        "التصميم والشرح (مخططات الشبكة والتبريرات)",
        "الاختبار والتحليل (نتائج المحاكاة والاختبارات)",
        "الأمان (استراتيجيات الحماية المطبقة)",
        "الخاتمة والتوصيات (التحسينات المستقبلية)",
        "المراجع (المصادر المستخدمة)"
      ],
      downloadLink: "#",
      tips: [
        "استخدم مخططات شبكية واضحة وعالية الجودة",
        "وضح تفاصيل التصميم والخطط بوضوح",
        "أرفق نتائج اختبارات الأداء والأمان",
        "افصل بين الجوانب التقنية والإدارية",
        "قدم تحليلاً للتكلفة والعائد إذا أمكن"
      ]
    },
    presentationTips: [
      "استخدم مخططات واضحة لتوضيح تصميم الشبكة",
      "ركز على التحديات التي واجهتها وكيف تغلبت عليها",
      "استخدم لقطات من أدوات المحاكاة لإثبات النتائج",
      "كن مستعداً لأسئلة تقنية مفصلة",
      "خصص شريحة لتوضيح الفوائد العملية للتصميم"
    ],
    evaluationCriteria: [
      { criterion: "دقة التصميم", weight: "30%", details: "ملاءمة التصميم للمتطلبات" },
      { criterion: "تنفيذ الشبكة", weight: "30%", details: "جودة المحاكاة والاختبارات" },
      { criterion: "التحليل والتقييم", weight: "20%", details: "عمق التحليل وشموليته" },
      { criterion: "العرض التقديمي", weight: "20%", details: "وضوح العرض وجودة التوثيق" }
    ],
    certifications: [
      {
        name: "CCNA",
        description: "شهادة سيسكو المعتمدة لمهندسي الشبكات",
        link: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html"
      }
    ],
    caseStudies: [
      {
        title: "Network Upgrade for University Campus",
        link: "#"
      }
    ]
  },
  
  {
    id: "database-design",
    title: "تصميم قواعد البيانات",
    description: "دليل متكامل لمشروع تخرج في تصميم قواعد البيانات يشمل كل الخطوات من الفكرة حتى التسليم النهائي مع التركيز على التطبيقات الواقعية",
    imageUrl: "https://images.pexels.com/photos/6937933/pexels-photo-6937933.jpeg?auto=compress&cs=tinysrgb&w=600",

    tools: [
      { name: "MySQL", description: "نظام إدارة قواعد البيانات العلائقية مفتوح المصدر", link: "https://mysql.com" },
      { name: "PostgreSQL", description: "نظام قواعد بيانات علائقية متقدم", link: "https://postgresql.org" },
      { name: "MongoDB", description: "نظام قواعد بيانات NoSQL", link: "https://www.mongodb.com" },
      { name: "SQLite", description: "نظام قواعد بيانات خفيف", link: "https://www.sqlite.org" },
      { name: "Oracle", description: "نظام قواعد بيانات مؤسسي", link: "https://www.oracle.com/database/" },
      { name: "ERDPlus", description: "أداة لتصميم مخططات الكيانات والعلاقات", link: "https://erdplus.com" }
    ],
    steps: [
      {
        title: "تحليل المتطلبات",
        details: [
          "حدد احتياجات النظام ومتطلبات البيانات",
          "قم بتحديد الكيانات الرئيسية وعلاقاتها",
          "حدد العمليات التي ستنفذ على البيانات",
          "قم بتوثيق جميع المتطلبات الوظيفية وغير الوظيفية"
        ],
        resources: [
          { type: "كتاب", title: "Database Systems Design", link: "#" },
          { type: "قالب", title: "Requirements Template", link: "#" }
        ]
      },
      {
        title: "التصميم المفاهيمي",
        details: [
          "قم بإنشاء مخطط الكيانات والعلاقات (ERD)",
          "حدد السمات والمفاتيح لكل كيان",
          "حدد أنواع العلاقات بين الكيانات",
          "قم بتطبيع التصميم لتجنب التكرار"
        ],
        resources: [
          { type: "أداة", title: "Lucidchart for ER Diagrams", link: "https://www.lucidchart.com" },
          { type: "دليل", title: "Database Normalization Guide", link: "#" }
        ]
      },
      {
        title: "التصميم المنطقي",
        details: [
          "حول المخطط المفاهيمي إلى جداول علائقية",
          "حدد أنواع البيانات والقيود لكل عمود",
          "صمم استعلامات SQL الأساسية",
          "خطط لاستراتيجية الفهرسة"
        ],
        resources: [
          { type: "كتاب", title: "SQL for Database Design", link: "#" },
          { type: "كورس", title: "Database Design - Udemy", link: "#" }
        ]
      },
      {
        title: "التنفيذ والاختبار",
        details: [
          "قم بإنشاء قاعدة البيانات وتطبيق القيود",
          "أدخل بيانات اختبارية واقعية",
          "اختبر أداء الاستعلامات الأساسية",
          "قم بتحسين التصميم بناءً على النتائج"
        ],
        resources: [
          { type: "أداة", title: "MySQL Workbench", link: "https://www.mysql.com/products/workbench/" },
          { type: "مقال", title: "Database Performance Tuning", link: "#" }
        ]
      }
    ],
    projectExamples: [
      {
        title: "نظام إدارة الطلاب",
        description: "نظام متكامل لإدارة بيانات الطلاب والمواد والنتائج",
        technologies: ["MySQL", "PHP", "ER Modeling"],
        githubLink: "#"
      },
      {
        title: "نظام حجز الفنادق",
        description: "نظام لحجز الغرف وإدارة العملاء في الفنادق",
        technologies: ["PostgreSQL", "Normalization"],
        githubLink: "#"
      },
      {
        title: "نظام توصيات الأفلام",
        description: "نظام يستخدم تقنيات NoSQL لتقديم توصيات شخصية",
        technologies: ["MongoDB", "Aggregation"],
        githubLink: "#"
      }
    ],
    reportTemplate: {
      structure: [
        "الصفحة العنوانية",
        "ملخص تنفيذي (ملخص النظام والتصميم)",
        "المقدمة والأهداف (الغرض من النظام)",
        "تحليل المتطلبات (الاحتياجات الوظيفية وغير الوظيفية)",
        "التصميم المفاهيمي (مخطط ERD والشرح)",
        "التصميم المنطقي (الجداول والعلاقات)",
        "التنفيذ (استعراض الاستعلامات الأساسية)",
        "الاختبارات والنتائج (أداء الاستعلامات)",
        "الخاتمة والتوصيات (التحسينات المستقبلية)",
        "المراجع (المصادر المستخدمة)"
      ],
      downloadLink: "#",
      tips: [
        "استخدم مخططات ERD واضحة وعالية الجودة",
        "وضح عملية التطبيع بالتفصيل",
        "أرفق أمثلة على الاستعلامات المهمة",
        "ناقش قرارات التصميم الصعبة",
        "قدم مقارنة بين الخيارات التصميمية إذا وجدت"
      ]
    },
    presentationTips: [
      "استخدم مخططات مرئية لتوضيح تصميم قاعدة البيانات",
      "ركز على كيفية تحسين أداء النظام",
      "وضح المشاكل التي واجهتك في التصميم وكيف حلها",
      "أظهر أمثلة حية للاستعلامات إذا أمكن",
      "كن مستعداً لأسئلة حول قرارات التصميم"
    ],
    evaluationCriteria: [
      { criterion: "تصميم قاعدة البيانات", weight: "40%", details: "جودة التصميم ودرجة التطبيع" },
      { criterion: "التنفيذ والتكامل", weight: "30%", details: "كفاءة التنفيذ وجودة الاستعلامات" },
      { criterion: "التحليل والتقييم", weight: "20%", details: "عمق التحليل وشموليته" },
      { criterion: "العرض التقديمي", weight: "10%", details: "وضوح العرض وجودة التوثيق" }
    ],
    normalization: [
      {
        level: "1NF",
        description: "القاعدة الأولى للتطبيع: القيم الذرية"
      },
      {
        level: "2NF",
        description: "القاعدة الثانية: الاعتماد الكامل على المفتاح"
      }
    ],
    caseStudies: [
      {
        title: "Database Design for E-Commerce",
        link: "#"
      }
    ]
  },
  {
    id: "smart-city-iot",
    title: "نظام إنترنت الأشياء لمدينة ذكية",
    description: "تصميم وتنفيذ نظام متكامل يعتمد على إنترنت الأشياء لإدارة موارد المدينة بكفاءة وتحسين حياة السكان.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScsA5p7X7Pqxu485z1M8yzs1UdfamaGNr2QA&s",
    tools: [
      { name: "Arduino/Raspberry Pi", description: "منصات تطوير الأجهزة المدمجة", link: "#" },
      { name: "MQTT", description: "بروتوكول اتصال إنترنت الأشياء", link: "#" },
      { name: "Node-RED", description: "أداة لإنشاء تدفقات البيانات", link: "#" },
      { name: "Cloud Platform (AWS IoT, Azure IoT)", description: "خدمات سحابية لإنترنت الأشياء", link: "#" }
    ],
    steps: [
      { title: "تحديد الاحتياجات", details: ["تحديد المشاكل التي يمكن حلها باستخدام إنترنت الأشياء", "دراسة الجدوى والمتطلبات الوظيفية"] },
      { title: "تصميم النظام", details: ["تحديد الأجهزة والشبكات والبروتوكولات", "تصميم هيكلية البيانات وتدفقها"] },
      { title: "التنفيذ والبرمجة", details: ["برمجة الأجهزة وتطوير الواجهات", "تكامل الخدمات السحابية"] },
      { title: "الاختبار والتحسين", details: ["اختبار الأداء والأمان", "تحسين النظام بناءً على النتائج"] }
    ],
    projectExamples: [
      { title: "نظام إدارة الإضاءة الذكي", description: "نظام يتحكم في إضاءة الشوارع بناءً على الحركة والوقت.", technologies: ["Arduino", "Light Sensors", "MQTT"] },
      { title: "نظام مراقبة جودة الهواء", description: "نظام يجمع بيانات جودة الهواء وينشرها للمواطنين.", technologies: ["Raspberry Pi", "Air Quality Sensors", "Cloud"] },
      { title: "نظام إدارة النفايات الذكي", description: "نظام يراقب مستوى امتلاء حاويات القمامة ويحسن مسارات جمعها.", technologies: ["Ultrasonic Sensors", "GPS", "Node-RED"] }
    ],
    reportTemplate: { structure: ["مقدمة", "دراسة الجدوى", "تصميم النظام", "التنفيذ", "النتائج والتحليل", "الخاتمة والتوصيات"] },
    presentationTips: ["عرض توضيحي للنظام", "شرح آلية عمل المكونات", "توضيح الفوائد العملية"],
    evaluationCriteria: [{ criterion: "الابتكار", weight: "25%" }, { criterion: "التنفيذ التقني", weight: "30%" }, { criterion: "الفائدة العملية", weight: "25%" }, { criterion: "التوثيق", weight: "20%" }],
    commonMistakes: ["اختيار مكونات غير متوافقة", "إهمال جانب الأمان", "عدم كفاية الاختبار"],
    successTips: ["البدء بنموذج مصغر", "الاختبار المستمر", "التوثيق التفصيلي"]
  },
  {
    id: "e-health-platform",
    title: "منصة صحية إلكترونية متكاملة",
    description: "تطوير منصة إلكترونية شاملة لتقديم خدمات صحية عن بعد، إدارة السجلات الطبية، وتسهيل التواصل بين المرضى والأطباء.",
    imageUrl: "https://www.collidu.com/media/catalog/product/img/d/6/d6d155956cd8c5e05769c0a8b4a66a26c4d989bb152823b4569052a5870f0535/e-health-slide1.png",
    tools: [
      { name: "React/Angular/Vue.js", description: "أطر عمل لتطوير واجهات المستخدم", link: "#" },
      { name: "Node.js/Python (Flask/Django)", description: "أطر عمل لتطوير الواجهات الخلفية", link: "#" },
      { name: "MongoDB/PostgreSQL", description: "قواعد بيانات", link: "#" },
      { name: "RESTful APIs", description: "لتكامل الخدمات", link: "#" }
    ],
    steps: [
      { title: "تحليل المتطلبات", details: ["تحديد احتياجات المستخدمين (المرضى، الأطباء، الإداريين)", "دراسة الأنظمة الصحية الحالية"] },
      { title: "تصميم النظام", details: ["تصميم واجهات المستخدم وتجربة المستخدم", "تصميم قاعدة البيانات وهيكلية النظام"] },
      { title: "التطوير", details: ["تطوير الواجهات الأمامية والخلفية", "تكامل الخدمات المختلفة"] },
      { title: "الاختبار والنشر", details: ["اختبار النظام وضمان الجودة", "نشر النظام وتدريب المستخدمين"] }
    ],
    projectExamples: [
      { title: "نظام حجز المواعيد الطبية عبر الإنترنت", description: "نظام يسمح للمرضى بحجز المواعيد مع الأطباء بسهولة.", technologies: ["React", "Node.js", "MongoDB"] },
      { title: "تطبيق تتبع السجلات الصحية الإلكترونية", description: "تطبيق يتيح للمرضى الوصول إلى سجلاتهم الصحية ومشاركتها مع الأطباء.", technologies: ["Angular", "Firebase"] },
      { title: "نظام الاستشارات الطبية عن بعد", description: "نظام يوفر استشارات صوتية ومرئية بين الأطباء والمرضى.", technologies: ["Vue.js", "WebRTC", "Socket.IO"] }
    ],
    reportTemplate: { structure: ["مقدمة", "تحليل النظام الحالي", "تصميم النظام المقترح", "التطوير والتنفيذ", "التقييم والتوصيات"] },
    presentationTips: ["عرض حي لوظائف المنصة", "توضيح الفوائد للمستخدمين المختلفين", "مناقشة جوانب الأمان والخصوصية"],
    evaluationCriteria: [{ criterion: "وظائف النظام", weight: "35%" }, { criterion: "تجربة المستخدم", weight: "25%" }, { criterion: "التنفيذ التقني", weight: "20%" }, { criterion: "التوثيق", weight: "20%" }],
    commonMistakes: ["إهمال جوانب الأمان والخصوصية", "تصميم واجهات مستخدم معقدة", "عدم كفاية الاختبار مع مستخدمين حقيقيين"],
    successTips: ["التركيز على احتياجات المستخدم", "التصميم التكراري مع الحصول على ملاحظات", "اختبار الأمان بشكل شامل"]
  },
  {
    id: "ai-powered-education",
    title: "نظام تعليمي مُعزز بالذكاء الاصطناعي",
    description: "تصميم وتطوير نظام تعليمي يستخدم تقنيات الذكاء الاصطناعي لتخصيص تجربة التعلم وتقديم دعم مُوجه للطلاب.",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4D12AQF7gapPpu0Xaw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1703644310885?e=2147483647&v=beta&t=xYAmK1MjHJ1GR_ukLGK1WIXJZH4flHY6RTSxkkI1P3M",
    tools: [
      { name: "Python", description: "لغة البرمجة", link: "#" },
      { name: "Natural Language Processing (NLTK, SpaCy)", description: "لمعالجة النصوص التعليمية", link: "#" },
      { name: "Machine Learning (Scikit-learn)", description: "لتخصيص المحتوى", link: "#" },
      { name: "Recommendation Systems", description: "لاقتراح مواد تعليمية", link: "#" }
    ],
    steps: [
      { title: "تحليل المحتوى التعليمي", details: ["جمع وتحليل النصوص والمواد التعليمية المختلفة", "تحديد المفاهيم الأساسية والعلاقات بينها"] },
      { title: "تطوير خوارزميات التخصيص", details: ["بناء نماذج لتحديد مستوى الطلاب واهتماماتهم", "تطوير خوارزميات لاقتراح محتوى مُناسب"] },
      { title: "تصميم واجهة المستخدم", details: ["إنشاء واجهة سهلة الاستخدام للطلاب والمعلمين", "عرض المحتوى المُخصص والتوصيات"] },
      { title: "الاختبار والتقييم", details: ["اختبار فعالية النظام في تحسين تجربة التعلم", "جمع ملاحظات المستخدمين وإجراء التحسينات"] }
    ],
    projectExamples: [
      { title: "نظام اقتراح مواد قراءة مُخصصة", description: "نظام يقترح مقالات وكتبًا بناءً على اهتمامات الطالب ومستواه.", technologies: ["Python", "NLP", "Recommendation Engines"] },
      { title: "مساعد افتراضي للإجابة على أسئلة الطلاب", description: "روبوت محادثة يستخدم معالجة اللغة الطبيعية للإجابة على استفسارات الطلاب.", technologies: ["Python", "NLP", "Chatbot Frameworks"] },
      { title: "نظام تقييم أداء الطلاب التكيفي", description: "نظام يُعدل صعوبة الأسئلة بناءً على إجابات الطالب.", technologies: ["Python", "Machine Learning"] }
    ],
    reportTemplate: { structure: ["مقدمة", "تحليل النظام التعليمي الحالي", "تصميم النظام المُعزز بالذكاء الاصطناعي", "التطوير والتنفيذ", "النتائج والتقييم"] },
    presentationTips: ["عرض أمثلة لتخصيص المحتوى", "توضيح آلية عمل خوارزميات الذكاء الاصطناعي", "مناقشة التأثير المحتمل على نتائج الطلاب"],
    evaluationCriteria: [{ criterion: "الابتكار في استخدام الذكاء الاصطناعي", weight: "30%" }, { criterion: "فعالية التخصيص", weight: "30%" }, { criterion: "تجربة المستخدم", weight: "20%" }, { criterion: "التوثيق", weight: "20%" }],
    commonMistakes: ["الاعتماد الزائد على الذكاء الاصطناعي وإهمال الجانب البشري", "بيانات تدريب غير كافية أو متحيزة", "واجهات مستخدم غير بديهية"],
    successTips: ["التركيز على تحسين تجربة التعلم", "التعاون مع خبراء في التعليم", "التقييم المستمر والتحديث"]
  },
  {
    id: "sustainable-agriculture-iot",
    title: "نظام إنترنت الأشياء للزراعة المستدامة",
    description: "تطوير نظام يعتمد على إنترنت الأشياء لمراقبة وتحسين الظروف الزراعية وتقليل استهلاك الموارد.",
    imageUrl: "https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg?auto=compress&cs=tinysrgb&w=600",
    tools: [
      { name: "Soil Moisture Sensors", description: "لقياس رطوبة التربة", link: "#" },
      { name: "Temperature and Humidity Sensors", description: "لقياس الظروف الجوية", link: "#" },
      { name: "Water Flow Meters", description: "لمراقبة استهلاك المياه", link: "#" },
      { name: "Data Analytics Platforms", description: "لتحليل البيانات واتخاذ القرارات", link: "#" }
    ],
    steps: [
      { title: "تحديد المؤشرات الزراعية", details: ["تحديد العوامل الرئيسية التي تؤثر على الإنتاجية والاستدامة", "اختيار أجهزة الاستشعار المناسبة"] },
      { title: "تصميم شبكة الاستشعار", details: ["تحديد مواقع أجهزة الاستشعار", "اختيار بروتوكولات الاتصال"] },
      { title: "تجميع وتحليل البيانات", details: ["تطوير نظام لتجميع البيانات من أجهزة الاستشعار", "استخدام أدوات التحليل لاستخلاص رؤى"] },
      { title: "تطوير نظام التحكم", details: ["إنشاء نظام لاتخاذ قرارات مستنيرة بناءً على البيانات", "تنفيذ آليات التحكم في الري والتسميد"] }
    ],
    projectExamples: [
      { title: "نظام ري ذكي يعتمد على رطوبة التربة", description: "نظام يقوم بري النباتات تلقائيًا بناءً على مستويات الرطوبة.", technologies: ["Soil Sensors", "Microcontrollers", "Actuators"] },
      { title: "نظام مراقبة الظروف الجوية الدقيقة للمحاصيل", description: "نظام يجمع بيانات الطقس المحلية ويتوقع الظروف المستقبلية.", technologies: ["Weather Stations", "Data Logging", "Predictive Analytics"] },
      { title: "نظام تتبع استهلاك المياه في الري", description: "نظام يقيس كمية المياه المستخدمة في الري ويقدم توصيات للتحسين.", technologies: ["Flow Meters", "IoT Platforms", "Data Visualization"] }
    ],
    reportTemplate: { structure: ["مقدمة", "أهمية الزراعة المستدامة", "تصميم نظام إنترنت الأشياء", "التنفيذ والنتائج", "الاستدامة والأثر البيئي"] },
    presentationTips: ["عرض نماذج لأجهزة الاستشعار المستخدمة", "توضيح كيفية عمل نظام تجميع البيانات", "شرح كيف يساهم النظام في الاستدامة"],
    evaluationCriteria: [{ criterion: "الأثر على الاستدامة", weight: "30%" }, { criterion: "التنفيذ التقني", weight: "30%" }, { criterion: "الابتكار في التطبيق الزراعي", weight: "20%" }, { criterion: "التوثيق", weight: "20%" }],
    commonMistakes: ["اختيار أجهزة استشعار غير دقيقة", "صعوبة في نشر وصيانة الأجهزة في البيئة الزراعية", "تحليل بيانات غير فعال"],
    successTips: ["التعاون مع خبراء في الزراعة", "اختبار النظام في ظروف حقيقية", "التركيز على سهولة الاستخدام للمزارعين"]
  },
  {
    "id": "smart-city-air-quality",
    "title": "نظام إنترنت الأشياء لمراقبة جودة الهواء في المدن الذكية",
    "description": "تطوير نظام يعتمد على إنترنت الأشياء لرصد تلوث الهواء وتقديم توصيات لتحسين جودته.",
    "imageUrl": "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=600",
    "tools": [
      { "name": "Gas Sensors", "description": "لكشف الملوثات مثل CO2 وNO2", "link": "#" },
      { "name": "Particulate Matter Sensors", "description": "لقياس الجسيمات الدقيقة (PM2.5, PM10)", "link": "#" },
      { "name": "Wi-Fi/ LoRa Modules", "description": "لنقل البيانات إلى السحابة", "link": "#" },
      { "name": "Data Visualization Tools", "description": "لعرض البيانات على خرائط حية", "link": "#" }
    ],
    "steps": [
      { "title": "تحديد مصادر التلوث", "details": ["اختيار مواقع تركيب المستشعرات", "تحديد الملوثات المستهدفة"] },
      { "title": "تصميم الشبكة", "details": ["اختيار بروتوكول اتصال مناسب", "ضمان تغطية كافية"] },
      { "title": "تحليل البيانات", "details": ["استخدام خوارزميات الذكاء الاصطناعي للتنبؤ بالتلوث", "إنشاء لوحات تحكم تفاعلية"] },
      { "title": "نشر التوصيات", "details": ["إرسال تنبيهات للسكان", "توفير بيانات مفتوحة للباحثين"] }
    ],
    "projectExamples": [
      { "title": "محطات مراقبة الهواء المتنقلة", "description": "أجهزة صغيرة تُركب على أعمدة الإنارة لرصد التلوث.", "technologies": ["IoT Sensors", "Solar Power", "Cloud Computing"] },
      { "title": "نظام تنبيهات جودة الهواء", "description": "تطبيق يرسل تحذيرات عند ارتفاع التلوث.", "technologies": ["Mobile Apps", "Real-time APIs"] },
      { "title": "تحليل تأثير حركة المرور على التلوث", "description": "ربط بيانات أجهزة الاستشعار ببيانات حركة المرور.", "technologies": ["Big Data Analytics", "GIS Mapping"] }
    ],
    "reportTemplate": { "structure": ["مقدمة", "مشكلة تلوث الهواء", "تصميم النظام", "النتائج والتوصيات"] },
    "presentationTips": ["عرض خريطة حية لجودة الهواء", "مقارنة البيانات قبل وبعد التنفيذ"],
    "evaluationCriteria": [
      { "criterion": "دقة البيانات", "weight": "30%" },
      { "criterion": "التغطية الجغرافية", "weight": "25%" },
      { "criterion": "الفعالية في تحسين جودة الهواء", "weight": "25%" },
      { "criterion": "التوثيق", "weight": "20%" }
    ],
    "commonMistakes": ["اختيار مستشعرات غير دقيقة", "إهمال صيانة الأجهزة", "عدم تفاعل المجتمع مع البيانات"],
    "successTips": ["التعاون مع البلديات", "استخدام طاقة متجددة للتشغيل", "توعية المواطنين بالنتائج"]
  },
  {
    "id": "smart-waste-management",
    "title": "نظام إنترنت الأشياء لإدارة النفايات الذكية",
    "description": "نظام لمراقبة حاويات النفايات وتحسين عمليات جمعها لتقليل التكاليف والتلوث.",
    "imageUrl": "https://images.pexels.com/photos/6210956/pexels-photo-6210956.jpeg?auto=compress&cs=tinysrgb&w=600",
    "tools": [
      { "name": "Ultrasonic Sensors", "description": "لقياس مستوى النفايات في الحاويات", "link": "#" },
      { "name": "GPS Trackers", "description": "تتبع موقع الحاويات ومسارات الشاحنات", "link": "#" },
      { "name": "Cloud Platforms", "description": "تخزين وتحليل البيانات", "link": "#" },
      { "name": "Mobile Apps", "description": "لإدارة العمليات وإرسال التنبيهات", "link": "#" }
    ],
    "steps": [
      { "title": "تركيب المستشعرات", "details": ["اختيار حاويات رئيسية", "ضمان اتصال مستقر"] },
      { "title": "ربط البيانات", "details": ["إرسال البيانات إلى منصة مركزية", "تحليل أنماط امتلاء الحاويات"] },
      { "title": "تحسين المسارات", "details": ["تحديد أفضل مسارات الجمع", "تقليل الوقود المستهلك"] },
      { "title": "التكامل مع البلدية", "details": ["مشاركة البيانات مع الجهات المعنية", "أتمتة العمليات"] }
    ],
    "projectExamples": [
      { "title": "حاويات ذكية تعمل بالطاقة الشمسية", "description": "حاويات تُعلن عن امتلائها تلقائيًا.", "technologies": ["Solar Panels", "LoRaWAN"] },
      { "title": "نظام توجيه شاحنات النفايات", "description": "تطبيق يحدد المسار الأمثل بناءً على البيانات.", "technologies": ["Route Optimization Algorithms", "Google Maps API"] },
      { "title": "نظام حوافز للمواطنين", "description": "مكافأة المستخدمين الذين يقللون النفايات.", "technologies": ["Blockchain", "Loyalty Programs"] }
    ],
    "reportTemplate": { "structure": ["مقدمة", "مشكلة إدارة النفايات", "تصميم الحل", "النتائج الاقتصادية والبيئية"] },
    "presentationTips": ["عرض مسارات الشاحنات قبل وبعد النظام", "مقارنة التكاليف"],
    "evaluationCriteria": [
      { "criterion": "تقليل تكاليف الجمع", "weight": "30%" },
      { "criterion": "تقليل البصمة الكربونية", "weight": "30%" },
      { "criterion": "سهولة الاستخدام", "weight": "20%" },
      { "criterion": "التوثيق", "weight": "20%" }
    ],
    "commonMistakes": ["أجهزة غير مقاومة للعوامل الجوية", "عدم دمج النظام مع البنية التحتية القائمة"],
    "successTips": ["اختبار النظام في منطقة محددة أولاً", "التعاون مع عمال النظافة"]
  },
  {
    "id": "smart-hospital-iot",
    "title": "نظام إنترنت الأشياء للمستشفيات الذكية",
    "description": "نظام لمراقبة المرضى وإدارة المعدات الطبية وتحسين كفاءة المستشفيات.",
    "imageUrl": "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600",
    "tools": [
      { "name": "Wearable Sensors", "description": "لمراقبة العلامات الحيوية للمرضى", "link": "#" },
      { "name": "RFID Tags", "description": "تتبع المعدات الطبية", "link": "#" },
      { "name": "AI Analytics", "description": "للتنبؤ بالمضاعفات الصحية", "link": "#" },
      { "name": "Hospital Management Software", "description": "لدمج البيانات مع سجلات المرضى", "link": "#" }
    ],
    "steps": [
      { "title": "تحديد الاحتياجات", "details": ["دراسة العمليات داخل المستشفى", "اختيار الأجهزة المناسبة"] },
      { "title": "نشر المستشعرات", "details": ["تركيب أجهزة مراقبة المرضى", "تثبيت أنظمة تتبع المعدات"] },
      { "title": "ربط الأنظمة", "details": ["تطوير واجهات برمجية للتكامل", "ضمان أمان البيانات"] },
      { "title": "التدريب والصيانة", "details": ["تدريب الكوادر الطبية", "إنشاء نظام دعم فني"] }
    ],
    "projectExamples": [
      { "title": "أسرة ذكية لمراقبة المرضى", "description": "أسرة تُنذر الطاقم الطبي عند تغير حالة المريض.", "technologies": ["Pressure Sensors", "Bluetooth"] },
      { "title": "نظام إنذار مبكر للعدوى", "description": "الكشف عن تفشي الأمراض داخل المستشفى.", "technologies": ["Machine Learning", "Data Mining"] },
      { "title": "تتبع المعدات في الوقت الحقيقي", "description": "منع ضياع الأجهزة الطبية.", "technologies": ["IoT Trackers", "Cloud Databases"] }
    ],
    "reportTemplate": { "structure": ["مقدمة", "تحديات القطاع الصحي", "تصميم النظام", "تحسين الجودة والكفاءة"] },
    "presentationTips": ["عرض بيانات حية من مستشعرات المرضى", "توضيح توفير الوقت والموارد"],
    "evaluationCriteria": [
      { "criterion": "تحسين رعاية المرضى", "weight": "40%" },
      { "criterion": "كفاءة إدارة المعدات", "weight": "30%" },
      { "criterion": "التوثيق والأمان", "weight": "30%" }
    ],
    "commonMistakes": ["إهمال خصوصية البيانات", "صعوبة تكامل النظام مع الأنظمة القديمة"],
    "successTips": ["التعاون مع الأطباء والممرضين", "اختبار النظام في أقسام محددة أولاً"]
  },
  {
    "id": "smart-building-energy",
    "title": "نظام إنترنت الأشياء لترشيد استهلاك الطاقة في المباني الذكية",
    "description": "نظام لمراقبة استهلاك الطاقة في المباني وتكييفها تلقائيًا لتقليل الهدر.",
    "imageUrl": "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=600",
    "tools": [
      { "name": "Smart Meters", "description": "قياس استهلاك الكهرباء والماء", "link": "#" },
      { "name": "Motion Sensors", "description": "كشف وجود الأشخاص في الغرف", "link": "#" },
      { "name": "HVAC Controllers", "description": "التحكم في التدفئة والتبريد", "link": "#" },
      { "name": "Energy Analytics", "description": "تحليل أنماط الاستهلاك", "link": "#" }
    ],
    "steps": [
      { "title": "تركيب المستشعرات", "details": ["وحدات قياس الطاقة", "أجهزة استشعار الحركة"] },
      { "title": "ربط النظام", "details": ["تكامل مع أنظمة المبنى", "ضمان اتصال آمن"] },
      { "title": "التحليل والتحكم", "details": ["تحديد أوقات الذروة", "أتمتة إيقاف الأجهزة غير المستخدمة"] },
      { "title": "التقارير والتوعية", "details": ["إرسال تقارير للمستأجرين", "نصائح لترشيد الاستهلاك"] }
    ],
    "projectExamples": [
      { "title": "نظام إضاءة ذكي", "description": "إطفاء الأنوار تلقائيًا عند عدم الحاجة.", "technologies": ["LED Lights", "Zigbee"] },
      { "title": "منظم حرارة ذكي", "description": "ضبط درجة الحرارة حسب عدد الأشخاص.", "technologies": ["Thermostats", "AI"] },
      { "title": "لوحة تحكم للطاقة", "description": "عرض الاستهلاك في الوقت الحقيقي.", "technologies": ["Dashboards", "Cloud"] }
    ],
    "reportTemplate": { "structure": ["مقدمة", "أهمية ترشيد الطاقة", "تصميم النظام", "النتائج المالية والبيئية"] },
    "presentationTips": ["مقارنة فواتير الطاقة قبل وبعد", "عرض خريطة حرارية للمبنى"],
    "evaluationCriteria": [
      { "criterion": "توفير الطاقة", "weight": "40%" },
      { "criterion": "التكامل مع البنية التحتية", "weight": "30%" },
      { "criterion": "رضا المستخدمين", "weight": "20%" },
      { "criterion": "التوثيق", "weight": "10%" }
    ],
    "commonMistakes": ["تجاهل خصوصية البيانات", "صعوبة الصيانة"],
    "successTips": ["بدء المشروع في مبنى تجريبي", "التعاون مع شركات الطاقة"]
  }
  ,
  {
    "id": "smart-building-energy",
    "title": "نظام إنترنت الأشياء لترشيد استهلاك الطاقة في المباني الذكية",
    "description": "نظام لمراقبة استهلاك الطاقة في المباني وتكييفها تلقائيًا لتقليل الهدر.",
    "imageUrl": "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=600",
    "tools": [
      { "name": "Smart Meters", "description": "قياس استهلاك الكهرباء والماء", "link": "#" },
      { "name": "Motion Sensors", "description": "كشف وجود الأشخاص في الغرف", "link": "#" },
      { "name": "HVAC Controllers", "description": "التحكم في التدفئة والتبريد", "link": "#" },
      { "name": "Energy Analytics", "description": "تحليل أنماط الاستهلاك", "link": "#" }
    ],
    "steps": [
      { "title": "تركيب المستشعرات", "details": ["وحدات قياس الطاقة", "أجهزة استشعار الحركة"] },
      { "title": "ربط النظام", "details": ["تكامل مع أنظمة المبنى", "ضمان اتصال آمن"] },
      { "title": "التحليل والتحكم", "details": ["تحديد أوقات الذروة", "أتمتة إيقاف الأجهزة غير المستخدمة"] },
      { "title": "التقارير والتوعية", "details": ["إرسال تقارير للمستأجرين", "نصائح لترشيد الاستهلاك"] }
    ],
    "projectExamples": [
      { "title": "نظام إضاءة ذكي", "description": "إطفاء الأنوار تلقائيًا عند عدم الحاجة.", "technologies": ["LED Lights", "Zigbee"] },
      { "title": "منظم حرارة ذكي", "description": "ضبط درجة الحرارة حسب عدد الأشخاص.", "technologies": ["Thermostats", "AI"] },
      { "title": "لوحة تحكم للطاقة", "description": "عرض الاستهلاك في الوقت الحقيقي.", "technologies": ["Dashboards", "Cloud"] }
    ],
    "reportTemplate": { "structure": ["مقدمة", "أهمية ترشيد الطاقة", "تصميم النظام", "النتائج المالية والبيئية"] },
    "presentationTips": ["مقارنة فواتير الطاقة قبل وبعد", "عرض خريطة حرارية للمبنى"],
    "evaluationCriteria": [
      { "criterion": "توفير الطاقة", "weight": "40%" },
      { "criterion": "التكامل مع البنية التحتية", "weight": "30%" },
      { "criterion": "رضا المستخدمين", "weight": "20%" },
      { "criterion": "التوثيق", "weight": "10%" }
    ],
    "commonMistakes": ["تجاهل خصوصية البيانات", "صعوبة الصيانة"],
    "successTips": ["بدء المشروع في مبنى تجريبي", "التعاون مع شركات الطاقة"]
  }

];

export default projects;