import type { Locale } from "./i18n";

export type PageKey = "home" | "services" | "industries" | "resources" | "about" | "book" | "contact";

export const site = {
  baseUrl: "https://bridgeworkflowstudio.com",
  email: "bridgeworkflowstudio@gmail.com",
  calendlyUrl: "https://calendly.com/bridgeworkflowstudio/20min",
  location: "Oakville, Ontario"
};

export const nav: Record<Locale, { key: PageKey; label: string; href: string }[]> = {
  en: [
    { key: "home", label: "Home", href: "/en" },
    { key: "services", label: "Services", href: "/en/services" },
    { key: "industries", label: "Industries", href: "/en/industries" },
    { key: "resources", label: "Resources", href: "/en/resources" },
    { key: "about", label: "About", href: "/en/about" },
    { key: "book", label: "Book a Consultation", href: site.calendlyUrl },
    { key: "contact", label: "Contact", href: "/en/contact" }
  ],
  zh: [
    { key: "home", label: "首页", href: "/zh" },
    { key: "services", label: "服务", href: "/zh/services" },
    { key: "industries", label: "行业", href: "/zh/industries" },
    { key: "resources", label: "资源", href: "/zh/resources" },
    { key: "about", label: "关于我们", href: "/zh/about" },
    { key: "book", label: "预约咨询", href: site.calendlyUrl },
    { key: "contact", label: "联系", href: "/zh/contact" }
  ]
};

const serviceIcons = ["WA", "AI", "DT", "CRM", "WEB", "FD"] as const;
const industryIcons = ["MF", "TL", "CL", "RE", "IN", "CW", "RT"] as const;

export const copy = {
  en: {
    common: {
      book: "Book a Free Consultation",
      explore: "Explore Services",
      email: "Email",
      learnMore: "Learn more",
      serving: "Serving the GTA, Ontario, and businesses across Canada"
    },
    home: {
      title: "AI-Powered Workflow Solutions for Small Businesses",
      subtitle:
        "We help businesses improve sales, reduce manual work, and build practical digital systems that make daily operations easier.",
      badges: ["Reduce Manual Work", "Improve Customer Follow-Up", "Adopt Practical AI"],
      dashboard: {
        title: "Workflow dashboard",
        metrics: [
          ["Leads", "24", "+18%"],
          ["Follow-ups", "12", "Due today"],
          ["Automation", "8", "Active"],
          ["CRM", "Clear", "Pipeline"],
          ["AI Assistant", "Ready", "Support"]
        ],
        pipeline: ["New lead", "Quote sent", "Reminder", "Booked call"]
      },
      problemsTitle: "Problems We Solve",
      problemsSubtitle:
        "Small teams often lose time and revenue because information, follow-up, and admin work live in too many places.",
      problems: [
        "Leads are not followed up on time",
        "Customer information is scattered",
        "Too much manual admin work",
        "The website exists but does not convert visitors",
        "Owners want to use AI but do not know where to start"
      ],
      whatTitle: "Practical Systems, Built Around Your Workflow",
      whoTitle: "Industries We Support",
      trustTitle: "Why Business Owners Choose Bridge Workflow Studio",
      aiTitle: "Practical AI, Not Hype",
      aiBody:
        "AI should make real operations easier, not add another confusing tool. We focus on usable assistants, follow-up workflows, content systems, and customer processes that a small team can actually maintain.",
      stepsTitle: "A Clear Path From Assessment to Implementation",
      steps: [
        ["Discovery", "Understand your business goals, current workflow, and immediate bottlenecks."],
        ["Workflow Assessment", "Map the process, identify manual work, and choose practical improvements."],
        ["Implementation & Support", "Build the system, help your team use it, and refine after launch."]
      ],
      ctaTitle: "Ready to make daily operations easier?",
      ctaBody:
        "Book a free 20-minute discovery call to review your current workflow, customer follow-up, and practical AI opportunities.",
      finalCta: "Book a Free 20-Minute Consultation"
    },
    services: {
      title: "Services",
      subtitle:
        "Practical digital systems for small businesses that need clearer sales, operations, and follow-up.",
      items: [
        {
          icon: serviceIcons[0],
          title: "Workflow Automation",
          description:
            "Automate repetitive follow-up, reminders, notifications, and document steps so your team spends less time chasing tasks.",
          points: ["Lead follow-up", "Appointment reminders", "Customer inquiries", "Internal notifications", "Document processing"]
        },
        {
          icon: serviceIcons[1],
          title: "AI Business Assistants",
          description:
            "Create practical assistants for support, sales, content, or internal knowledge so staff can find answers and respond faster.",
          points: ["Customer support assistant", "Sales assistant", "Content assistant", "Internal knowledge assistant"]
        },
        {
          icon: serviceIcons[2],
          title: "Digital Transformation Consulting",
          description:
            "Assess your current workflow and choose the right tools before investing in software, automation, or AI systems.",
          points: ["Workflow assessment", "Process improvement", "Technology roadmap", "Implementation planning"]
        },
        {
          icon: serviceIcons[3],
          title: "CRM & Customer Follow-Up Systems",
          description:
            "Organize leads, quotes, appointments, and customer history in a simple system your team can actually use.",
          points: ["Lead management", "Quotation tracking", "Customer follow-up", "Appointment management", "Retention systems"]
        },
        {
          icon: serviceIcons[4],
          title: "Website & Digital Presence",
          description:
            "Build a clear online presence that explains your services, supports lead capture, and gives customers a path to contact you.",
          points: ["Business websites", "Landing pages", "Google Business Profile", "SEO foundation", "Content structure"]
        },
        {
          icon: serviceIcons[5],
          title: "Funding & Digital Adoption Advisory",
          description:
            "We help businesses understand available funding opportunities and prepare business and digital adoption documentation where applicable.",
          points: ["Program fit review", "Digital adoption planning", "Documentation support", "No funding approval is guaranteed"]
        }
      ]
    },
    industries: {
      title: "Industries",
      subtitle:
        "Focused support for local service businesses, operators, and teams with practical day-to-day needs.",
      items: [
        {
          icon: industryIcons[0],
          title: "Manufacturing",
          intro: "Cabinet shops, woodworking businesses, custom manufacturing, and small factories.",
          pains: ["Quotation delays", "Customer follow-up gaps", "Workflow inefficiency"],
          solutions: ["Quote tracking", "CRM", "Internal workflow automation"]
        },
        {
          icon: industryIcons[1],
          title: "Transportation & Logistics",
          intro: "Trucking companies, dispatch services, freight forwarders, and logistics providers.",
          pains: ["Permit tracking", "Manual dispatch notes", "Scattered customer updates"],
          solutions: ["Workflow automation", "Driver recruitment systems", "Digital documentation"]
        },
        {
          icon: industryIcons[2],
          title: "Cleaning & Laundry",
          intro: "Dry cleaners, laundry services, and commercial cleaning businesses.",
          pains: ["Missed reminders", "Repeat customers not tracked", "Reviews not requested"],
          solutions: ["Customer reminders", "CRM", "Online booking", "Review management"]
        },
        {
          icon: industryIcons[3],
          title: "Real Estate",
          intro: "Real estate agents and teams that need better lead capture and follow-up.",
          pains: ["Lead leakage", "Inconsistent follow-up", "Content workload"],
          solutions: ["Lead capture", "CRM", "Website", "AI content support"]
        },
        {
          icon: industryIcons[4],
          title: "Insurance",
          intro: "Insurance agents and brokerages managing renewals, quotes, and customer relationships.",
          pains: ["Renewal reminders", "Lead tracking", "Manual customer follow-up"],
          solutions: ["Lead management", "CRM", "Website", "Customer follow-up"]
        },
        {
          icon: industryIcons[5],
          title: "Clinics & Wellness",
          intro: "Counselling, psychology, wellness, and massage clinics.",
          pains: ["Booking friction", "Client follow-up", "Content consistency"],
          solutions: ["Online booking", "Client follow-up", "Content marketing", "Website"]
        },
        {
          icon: industryIcons[6],
          title: "Retail & Local Businesses",
          intro: "Convenience stores, retail shops, food businesses, importers, and distributors.",
          pains: ["Customer retention", "Review management", "Manual admin"],
          solutions: ["CRM", "Review management", "Workflow automation"]
        }
      ]
    },
    trust: [
      ["Bilingual Service", "Clear communication for Chinese and English-speaking business owners in Canada."],
      ["Small Business Experience", "Advice and implementation shaped around practical operations, budget, and staff capacity."],
      ["Ontario / GTA Focused", "Local market understanding for service businesses, operators, and growing teams."],
      ["Implementation, Not Just Advice", "We help design, build, and refine systems that support daily work."]
    ],
    resources: {
      title: "Resources",
      subtitle: "A resource library for practical AI adoption and digital transformation topics.",
      categories: ["AI Adoption", "Workflow Automation", "CRM", "Digital Transformation", "Funding Programs", "Business Growth"],
      future: ["DCC Guide", "DMAP Guide", "AI for Small Business", "Transportation Industry Digitalization", "Real Estate Marketing Systems", "Insurance CRM Systems"]
    },
    about: {
      title: "Helping Small Businesses Bridge the Gap Between Operations and Technology",
      body:
        "Bridge Workflow Studio was founded by Cindy Deng to help business owners implement practical technology solutions that improve efficiency and support growth.",
      experience: ["Small Business Ownership", "Manufacturing Operations", "Business Consulting", "Bilingual Communication", "Digital Workflow Design", "AI Adoption"]
    },
    form: {
      bookTitle: "Book a Free 20-Minute Discovery Call",
      contactTitle: "Contact Bridge Workflow Studio",
      intro: "Share a few details and we will reply by email to coordinate the next step.",
      fields: ["Name", "Email", "Phone", "Company", "Industry", "Service Interested In", "Message"],
      submit: "Send Request"
    }
  },
  zh: {
    common: {
      book: "预约免费咨询",
      explore: "查看服务",
      email: "邮箱",
      learnMore: "了解更多",
      serving: "服务范围：大多伦多地区、安省及加拿大各地企业"
    },
    home: {
      title: "为中小企业打造实用的 AI 与流程自动化解决方案",
      subtitle:
        "我们帮助加拿大中小企业梳理业务流程、优化客户跟进、建立网站与数字化系统，让销售、运营和管理更高效、更清晰、更省力。",
      badges: ["减少手动工作", "提升客户跟进", "落地实用 AI"],
      dashboard: {
        title: "业务流程面板",
        metrics: [
          ["线索", "24", "+18%"],
          ["待跟进", "12", "今日"],
          ["自动化", "8", "运行中"],
          ["CRM", "清晰", "客户流程"],
          ["AI 助手", "就绪", "支持业务"]
        ],
        pipeline: ["新线索", "已发报价", "自动提醒", "预约沟通"]
      },
      problemsTitle: "我们解决的问题",
      problemsSubtitle:
        "很多中小企业不是缺少努力，而是客户信息、跟进流程和日常管理分散在太多地方，导致时间和机会被浪费。",
      problems: [
        "客户线索没有及时跟进",
        "客户信息分散在表格、微信、邮件和纸质记录中",
        "日常行政工作太多，老板和员工都被琐事占用",
        "有网站，但没有形成有效的咨询和转化流程",
        "想使用 AI，但不知道从哪里开始"
      ],
      whatTitle: "围绕真实业务流程搭建实用系统",
      whoTitle: "我们支持的行业",
      trustTitle: "为什么企业主选择 Bridge Workflow Studio",
      aiTitle: "实用 AI，而不是概念炒作",
      aiBody:
        "AI 应该帮助企业解决真实运营问题，而不是增加一个难以维护的新工具。我们关注客服、销售跟进、内容支持、内部知识库和客户流程等可以真正落地的应用。",
      stepsTitle: "从评估到落地的清晰流程",
      steps: [
        ["初步沟通", "了解业务目标、现有流程和最需要解决的问题。"],
        ["流程评估", "梳理客户跟进、报价、预约、文件和内部协作中的低效环节。"],
        ["落地与支持", "建立系统，协助团队使用，并在上线后根据反馈优化。"]
      ],
      ctaTitle: "想让日常运营更清晰、更省力？",
      ctaBody:
        "预约 20 分钟免费初步咨询，我们可以一起查看你的客户跟进、日常流程和适合落地的 AI 应用机会。",
      finalCta: "预约 20 分钟免费咨询"
    },
    services: {
      title: "服务",
      subtitle: "面向加拿大中小企业的实用数字化系统，帮助销售、运营和客户跟进更清楚。",
      items: [
        {
          icon: serviceIcons[0],
          title: "流程自动化",
          description: "把重复的跟进、提醒、内部通知和文件处理流程自动化，让团队少做重复劳动，把时间用在客户和业务上。",
          points: ["潜在客户跟进", "预约提醒", "客户咨询处理", "内部通知", "文件处理"]
        },
        {
          icon: serviceIcons[1],
          title: "AI 商务助手",
          description: "为客服、销售、内容和内部知识管理搭建实用 AI 助手，帮助团队更快找到答案并回复客户。",
          points: ["客户服务助手", "销售助手", "内容助手", "内部知识库助手"]
        },
        {
          icon: serviceIcons[2],
          title: "数字化转型咨询",
          description: "先评估业务流程和工具需求，再决定是否需要软件、自动化或 AI，避免盲目投入。",
          points: ["流程评估", "流程优化", "技术路线图", "落地计划"]
        },
        {
          icon: serviceIcons[3],
          title: "CRM 客户管理系统",
          description: "把线索、报价、预约和客户历史整理到清晰系统中，让客户跟进更稳定、更可追踪。",
          points: ["线索管理", "报价追踪", "客户跟进", "预约管理", "复购与留存系统"]
        },
        {
          icon: serviceIcons[4],
          title: "网站与线上展示",
          description: "建立清楚可信的线上形象，说明服务、收集咨询，并让客户知道下一步如何联系你。",
          points: ["企业官网", "落地页", "Google 商家资料", "SEO 基础", "内容结构"]
        },
        {
          icon: serviceIcons[5],
          title: "政府补贴与数字化项目咨询",
          description:
            "我们帮助企业了解适合的数字化转型补贴和政府支持项目，并协助准备申请所需的业务资料和数字化方案。",
          points: ["项目匹配评估", "数字化方案准备", "申请资料支持", "不承诺或保证补贴结果"]
        }
      ]
    },
    industries: {
      title: "服务行业",
      subtitle: "为本地服务业、运营型企业和需要提升日常效率的团队提供聚焦支持。",
      items: [
        {
          icon: industryIcons[0],
          title: "制造业",
          intro: "橱柜厂、木工厂、定制制造和小型工厂。",
          pains: ["报价延迟", "客户跟进不稳定", "流程效率不足"],
          solutions: ["报价追踪", "CRM", "内部流程自动化"]
        },
        {
          icon: industryIcons[1],
          title: "运输与物流",
          intro: "卡车公司、调度服务、货运代理和物流服务商。",
          pains: ["许可追踪", "调度记录分散", "客户更新依赖人工"],
          solutions: ["流程自动化", "司机招聘系统", "数字文件管理"]
        },
        {
          icon: industryIcons[2],
          title: "清洁与洗衣",
          intro: "干洗店、洗衣服务和商业清洁公司。",
          pains: ["提醒容易遗漏", "老客户没有系统维护", "评价邀请不稳定"],
          solutions: ["客户提醒", "CRM", "线上预约", "评价管理"]
        },
        {
          icon: industryIcons[3],
          title: "地产",
          intro: "需要提升线索收集和客户跟进的地产经纪与团队。",
          pains: ["线索流失", "跟进不一致", "内容制作压力大"],
          solutions: ["线索收集", "CRM", "网站", "AI 内容支持"]
        },
        {
          icon: industryIcons[4],
          title: "保险",
          intro: "管理续保、报价和客户关系的保险经纪与代理团队。",
          pains: ["续保提醒", "线索追踪", "人工跟进耗时"],
          solutions: ["线索管理", "CRM", "网站", "客户跟进"]
        },
        {
          icon: industryIcons[5],
          title: "诊所与健康服务",
          intro: "心理咨询、心理治疗、健康服务和按摩诊所。",
          pains: ["预约不顺畅", "客户跟进", "内容不稳定"],
          solutions: ["线上预约", "客户跟进", "内容营销", "网站"]
        },
        {
          icon: industryIcons[6],
          title: "零售与本地商家",
          intro: "便利店、零售店、餐饮相关业务、进口与分销企业。",
          pains: ["客户留存", "评价管理", "行政工作太多"],
          solutions: ["CRM", "评价管理", "流程自动化"]
        }
      ]
    },
    trust: [
      ["中英双语服务", "为加拿大中文和英文企业主提供清晰、直接、容易理解的沟通。"],
      ["理解中小企业运营", "方案会考虑预算、人手、日常流程和团队实际使用能力。"],
      ["聚焦安省和大多地区", "熟悉本地服务业、运营型企业和成长型团队的实际需求。"],
      ["不只是建议，更重视落地", "协助设计、建立并优化真正支持日常工作的系统。"]
    ],
    resources: {
      title: "资源",
      subtitle: "围绕 AI 应用、流程自动化和数字化转型的实用资料库。",
      categories: ["AI 应用", "流程自动化", "CRM", "数字化转型", "补贴项目", "业务增长"],
      future: ["DCC 指南", "DMAP 指南", "中小企业 AI 应用", "运输行业数字化", "地产营销系统", "保险 CRM 系统"]
    },
    about: {
      title: "帮助中小企业连接日常运营与实用技术",
      body:
        "Bridge Workflow Studio 由 Cindy Deng 创立，专注帮助企业主落地实用技术方案，提升效率并支持业务增长。",
      experience: ["小企业经营", "制造业运营", "商业咨询", "中英双语沟通", "数字化流程设计", "AI 应用落地"]
    },
    form: {
      bookTitle: "预约 20 分钟免费初步咨询",
      contactTitle: "联系 Bridge Workflow Studio",
      intro: "请留下基本信息，我们会通过邮件回复并安排下一步沟通。",
      fields: ["姓名", "邮箱", "电话", "公司", "行业", "感兴趣的服务", "留言"],
      submit: "发送咨询"
    }
  }
} as const;
