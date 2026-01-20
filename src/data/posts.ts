export interface Post {
  title: string;
  date: Date;
  readTime: number;
  content: string;
  description?: string;
  type?: 'professional' | 'personal';
  pinned?: boolean;
}

export const posts: Record<string, Post> = {
  "ai-workflows-claude": {
    title: "Building AI-Powered Workflows with Claude",
    date: new Date("2025-01-15"),
    readTime: 7,
    description: "How to leverage Claude AI to automate complex development workflows and boost productivity.",
    type: "professional",
    content: `
      <p>AI-powered workflows are transforming how developers work. Claude, Anthropic's AI assistant, is particularly well-suited for automating complex development tasks.</p>

      <h2>Why Claude for Workflows?</h2>
      <p>Claude excels at understanding context and maintaining consistency across long conversations. This makes it ideal for multi-step workflows that require remembering previous steps.</p>

      <h2>Getting Started</h2>
      <p>The key to effective AI workflows is breaking down complex tasks into smaller, manageable steps. Each step should have clear inputs and outputs.</p>

      <h2>Best Practices</h2>
      <ul>
        <li>Start with a clear goal</li>
        <li>Break tasks into atomic steps</li>
        <li>Use structured prompts</li>
        <li>Validate outputs at each step</li>
      </ul>
    `,
  },
  "remote-work-thoughts": {
    title: "Thoughts on Remote Work",
    date: new Date("2025-01-12"),
    readTime: 3,
    description: "Reflections on working remotely and maintaining work-life balance.",
    type: "personal",
    pinned: true,
    content: `
      <p>Remote work has fundamentally changed how I approach my day. After years of working from home, I've learned what works and what doesn't.</p>

      <h2>The Good</h2>
      <p>Flexibility is the biggest benefit. I can structure my day around my energy levels and personal commitments.</p>

      <h2>The Challenges</h2>
      <p>Isolation is real. Without deliberate effort, it's easy to go days without meaningful human interaction.</p>

      <h2>What Works for Me</h2>
      <p>A consistent morning routine, regular breaks, and dedicated workspace make all the difference.</p>
    `,
  },
  "seo-automation-real-estate": {
    title: "SEO Automation for Real Estate Websites",
    date: new Date("2025-01-10"),
    readTime: 5,
    description: "A deep dive into automating SEO tasks for real estate websites using AI and n8n.",
    type: "professional",
    content: `
      <p>Real estate websites have unique SEO challenges: location-based keywords, property listings that change frequently, and the need for fresh content.</p>

      <h2>The Automation Stack</h2>
      <p>I use a combination of n8n for workflow automation, Claude for content generation, and custom scripts for data processing.</p>

      <h2>Key Automations</h2>
      <ul>
        <li>Automatic meta description generation</li>
        <li>Property listing optimization</li>
        <li>Location-based content creation</li>
        <li>Internal linking suggestions</li>
      </ul>
    `,
  },
  "learning-in-public": {
    title: "Learning in Public",
    date: new Date("2025-01-05"),
    readTime: 4,
    description: "Why sharing your learning journey publicly is one of the best things you can do.",
    type: "personal",
    content: `
      <p>Learning in public is one of the most valuable things you can do for your career. It forces clarity, builds your network, and helps others.</p>

      <h2>Why It Works</h2>
      <p>When you explain something publicly, you have to truly understand it. The fear of being wrong pushes you to research more deeply.</p>

      <h2>How to Start</h2>
      <p>Start small. Tweet about what you learned today. Write a short blog post. The format doesn't matter—consistency does.</p>
    `,
  },
  "digital-minimalism": {
    title: "Digital Minimalism",
    date: new Date("2024-12-28"),
    readTime: 5,
    description: "Finding focus in a world of infinite distractions.",
    type: "personal",
    content: `
      <p>Our attention is our most valuable resource, yet we freely give it away to apps designed to capture and hold it.</p>

      <h2>The Problem</h2>
      <p>Every notification, every infinite scroll, every recommendation algorithm is fighting for your attention.</p>

      <h2>My Approach</h2>
      <p>I've removed social media apps from my phone, disabled most notifications, and use website blockers during work hours.</p>

      <h2>The Results</h2>
      <p>More focus, more creative output, and surprisingly, less FOMO than I expected.</p>
    `,
  },
  "webflow-ai-content": {
    title: "Webflow + AI: The Perfect Combo for Content",
    date: new Date("2024-12-20"),
    readTime: 4,
    description: "Combining Webflow's visual editor with AI-generated content for faster website creation.",
    type: "professional",
    content: `
      <p>Webflow's visual editor combined with AI-generated content creates a powerful workflow for rapid website development.</p>

      <h2>The Workflow</h2>
      <p>Design in Webflow, generate content with AI, and iterate quickly based on feedback.</p>

      <h2>Tips</h2>
      <ul>
        <li>Use AI for first drafts, not final copy</li>
        <li>Create content templates for consistency</li>
        <li>Always review and edit AI output</li>
      </ul>
    `,
  },
  "astro-portfolio": {
    title: "Why I Switched to Astro for Portfolio Sites",
    date: new Date("2024-12-15"),
    readTime: 3,
    description: "Astro's island architecture makes it perfect for content-focused sites.",
    type: "professional",
    content: `
      <p>Astro's "islands architecture" is perfect for content-focused sites like portfolios and blogs.</p>

      <h2>Why Astro?</h2>
      <ul>
        <li>Zero JavaScript by default</li>
        <li>Partial hydration for interactive components</li>
        <li>Great DX with file-based routing</li>
        <li>Built-in image optimization</li>
      </ul>

      <h2>The Result</h2>
      <p>Faster load times, better SEO, and a simpler mental model for building content sites.</p>
    `,
  },
};

export function getPostSlugs(): string[] {
  return Object.keys(posts);
}

export function getPost(slug: string): Post | undefined {
  return posts[slug];
}

export function getAllPosts(): Array<{ slug: string } & Post> {
  return Object.entries(posts)
    .map(([slug, post]) => ({ slug, ...post }))
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}
