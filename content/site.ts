import type { SiteContent } from "@/lib/types";

export const siteContent: SiteContent = {
  profile: {
    name: "Rafael Asencio",
    role: "Senior iOS Engineer",
    introduction:
      "Senior iOS Engineer with 6+ years building native mobile apps across fintech, education, sports technology, aviation, and mobility. Specialized in SwiftUI, UIKit, and scalable architectures for secure, maintainable production software.",
    email: "rafaelasenciodeveloper@gmail.com",
    cvUrl: "/cv.pdf",
    githubUrl: "https://github.com/rafaelasenciodev",
    linkedinUrl: "https://www.linkedin.com/in/rafaelasencio",
    location: "Sevilla, Spain",
  },
  about: {
    summary:
      "I design and ship native iOS applications for international teams, from architecture and modularization to App Store release management. My work spans white-label platforms, banking security features, aviation tooling, and consumer apps — with a focus on SwiftUI modernization, clean architecture, and collaborative delivery.",
    technologies: [
      "Swift",
      "SwiftUI",
      "UIKit",
      "Clean Architecture",
      "MVVM",
      "VIPER",
      "Async/Await",
      "SwiftData",
      "Core Data",
      "SPM",
      "REST APIs",
      "Firebase",
      "Testing",
      "App Store Connect",
      "Fastlane",
    ],
    industries: [
      "Fintech",
      "Education",
      "Sports Technology",
      "Aviation",
      "Mobility",
      "Real Estate",
    ],
  },
  experience: [
    {
      id: "sngular",
      company: "Sngular",
      role: "Senior iOS Engineer",
      startDate: "May 2023",
      endDate: "May 2026",
      description:
        "Remote iOS engineering for enterprise and product clients across banking, education, sports, and mobility — leading architecture decisions, SwiftUI migrations, and App Store releases.",
      highlights: [
        "Santander Universia: UIKit-to-SwiftUI migration and VIPER-to-MVVM refactoring on a white-label educational platform with 80+ client-specific app targets",
        "ABANCA B100: security-critical banking features, biometric authentication, and encrypted user workflows",
        "NextPass: SwiftUI design system and reusable component library distributed via SPM",
        "Padmi: primary iOS engineer for an App Store production app with heat maps, video playback, and deep linking",
      ],
      technologies: ["Swift", "SwiftUI", "UIKit", "MVVM", "VIPER", "SPM"],
    },
    {
      id: "cactusoft",
      company: "Cactusoft",
      role: "iOS Engineer",
      startDate: "Feb 2022",
      endDate: "May 2023",
      description:
        "Hybrid iOS development for international clients in aviation and property management, owning features end to end from implementation to release.",
      highlights: [
        "AvioBook: delivered meteorological filters and enhanced data visualization for a mobile aviation application",
        "PB Plus: primary iOS engineer for an iPad inspection tool with multimedia capture, Core Data persistence, and data upload workflows",
      ],
      technologies: ["Swift", "UIKit", "Core Data", "REST APIs"],
    },
    {
      id: "bluumi",
      company: "Bluumi",
      role: "iOS Engineer",
      startDate: "Sep 2020",
      endDate: "Feb 2022",
      description:
        "Built consumer and enterprise iOS applications for clients in real estate and immersive product experiences.",
      highlights: [
        "Grupo ABU: developed a real estate mobile app integrated with Unity, enabling users to customize rooms in 3D",
      ],
      technologies: ["Swift", "UIKit", "Unity Integration"],
    },
  ],
  projects: [
    {
      id: "swiftui-architecture-showcase",
      title: "SwiftUI Architecture Showcase",
      description:
        "iOS portfolio app demonstrating Clean Architecture, MVVM, SPM modules, SwiftData CRUD, and Swift Testing — a reference for scalable SwiftUI project structure.",
      status: "published",
      tags: ["SwiftUI", "Clean Architecture", "MVVM", "SPM", "Swift Testing"],
      repoUrl: "https://github.com/rafaelasenciodev/showcase",
    },
    {
      id: "upcoming-project",
      title: "Modular iOS Toolkit",
      description:
        "Open-source Swift packages for common iOS infrastructure patterns — dependency injection, networking, and feature module boundaries.",
      status: "upcoming",
      tags: ["Swift", "SPM", "Open Source"],
    },
  ],
  articles: [
    {
      id: "srp-swift",
      title: "I. Single Responsibility Principle in Swift",
      source: "Medium",
      url: "https://rafaelasenciodeveloper.medium.com/i-single-responsibility-principle-in-swift-f99101f92a9a",
      publishedAt: "Apr 2021",
      summary:
        "Introduction to SOLID principles and how the Single Responsibility Principle applies in Swift.",
    },
    {
      id: "ocp-swift",
      title: "II. Open-Closed Principle in Swift",
      source: "Medium",
      url: "https://rafaelasenciodeveloper.medium.com/ii-open-closed-principle-in-swift-e4387254baa2",
      publishedAt: "Aug 2021",
      summary:
        "Extending behavior without modifying existing code using abstraction and protocols.",
    },
    {
      id: "lsp-swift",
      title: "III. Liskov Substitution Principle in Swift",
      source: "Medium",
      url: "https://rafaelasenciodeveloper.medium.com/iii-liskov-substitution-principle-in-swift-1ec64e392c1a",
      publishedAt: "Aug 2021",
      summary:
        "How subclasses should replace superclasses without changing application behavior.",
    },
  ],
};
