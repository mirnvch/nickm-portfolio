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
  // Professional posts
  "ai-in-qa-testing": {
    title: "How I Use AI in QA Testing",
    date: new Date("2025-01-15"),
    readTime: 6,
    description: "My experience integrating AI tools into the QA workflow",
    type: "professional",
    pinned: true,
    content: `
      <h2>AI is Changing QA</h2>
      <p>After 7+ years in QA, I've seen many tools come and go. But AI is different. It's not just another tool – it's a paradigm shift in how we approach testing.</p>

      <h2>How I Use AI Daily</h2>
      <ul>
        <li><strong>Test case generation:</strong> Claude helps me brainstorm edge cases I might miss</li>
        <li><strong>Code review:</strong> AI catches potential bugs before they reach QA</li>
        <li><strong>Documentation:</strong> Generating test plans and reports faster</li>
        <li><strong>Automation scripts:</strong> Writing Playwright/Cypress tests with AI assistance</li>
      </ul>

      <h2>The Human Element</h2>
      <p>AI doesn't replace QA engineers – it amplifies us. We still need human judgment for UX issues, business logic validation, and exploratory testing. AI handles the repetitive work so we can focus on what matters.</p>

      <h2>My Toolkit</h2>
      <p>Currently using Claude for complex reasoning, GitHub Copilot for code, and custom n8n workflows to automate reporting. The combination is powerful.</p>
    `,
  },
  "n8n-workflows": {
    title: "Building Automated Workflows with n8n",
    date: new Date("2025-01-10"),
    readTime: 5,
    description: "How I automate repetitive tasks with n8n",
    type: "professional",
    content: `
      <h2>Why n8n?</h2>
      <p>n8n is an open-source workflow automation tool that lets you connect anything to anything. Think Zapier, but self-hosted and infinitely more flexible.</p>

      <h2>My Most Used Workflows</h2>
      <ul>
        <li><strong>Content publishing:</strong> Write in Notion → AI translation → Publish to CMS</li>
        <li><strong>SEO monitoring:</strong> Track rankings → Alert on changes → Generate reports</li>
        <li><strong>Test reporting:</strong> CI/CD results → Format → Send to Slack/Email</li>
        <li><strong>Lead processing:</strong> Form submission → Enrich data → CRM update</li>
      </ul>

      <h2>n8n + AI = Magic</h2>
      <p>The real power comes when you combine n8n with AI. I use it to automatically generate SEO content, translate articles, and even write test scenarios based on user stories.</p>
    `,
  },
  "manual-to-automation": {
    title: "From Manual to Automation: My QA Journey",
    date: new Date("2025-01-05"),
    readTime: 7,
    description: "My path from manual tester to automation engineer",
    type: "professional",
    content: `
      <h2>Starting in QA (2018)</h2>
      <p>Like many QA engineers, I started with manual testing. Click, check, document, repeat. It was thorough but slow.</p>

      <h2>The Automation Bug</h2>
      <p>In 2019, I wrote my first Selenium test. It was ugly, flaky, and took me 3 hours to write something that took 2 minutes to test manually. But I was hooked.</p>

      <h2>The Learning Curve</h2>
      <ul>
        <li><strong>Selenium:</strong> The classic. Learned the hard way about waits and flaky tests</li>
        <li><strong>Cypress:</strong> Game changer for frontend testing</li>
        <li><strong>Playwright:</strong> My current favorite. Best of both worlds</li>
        <li><strong>Appium:</strong> For mobile testing needs</li>
      </ul>

      <h2>Lessons Learned</h2>
      <p>Automation isn't about replacing manual testing – it's about freeing up time for exploratory testing and edge cases that matter. The best QA strategy combines both.</p>
    `,
  },
  "playwright-vs-cypress": {
    title: "Playwright vs Cypress: My Take",
    date: new Date("2024-12-20"),
    readTime: 4,
    description: "Comparing two popular testing frameworks",
    type: "professional",
    content: `
      <h2>The Contenders</h2>
      <p>Both Playwright and Cypress are excellent modern testing frameworks. I've used both extensively, and here's my honest comparison.</p>

      <h2>Cypress Pros</h2>
      <ul>
        <li>Amazing developer experience</li>
        <li>Time-travel debugging is incredible</li>
        <li>Great documentation and community</li>
        <li>Easy to set up and start</li>
      </ul>

      <h2>Playwright Pros</h2>
      <ul>
        <li>True cross-browser support (Chromium, Firefox, WebKit)</li>
        <li>Better handling of multiple tabs/windows</li>
        <li>More flexible for complex scenarios</li>
        <li>Built-in API testing capabilities</li>
      </ul>

      <h2>My Choice</h2>
      <p>For most projects, I now reach for Playwright. The cross-browser support and flexibility outweigh Cypress's slightly better DX. But honestly? You can't go wrong with either.</p>
    `,
  },

  // Personal posts
  "remote-life": {
    title: "The Remote Life",
    date: new Date("2025-01-12"),
    readTime: 3,
    description: "Thoughts on working remotely as a digital nomad",
    type: "personal",
    pinned: true,
    content: `
      <h2>Freedom and Responsibility</h2>
      <p>Working remotely since 2020 has taught me that freedom comes with discipline. No office means no boundaries – unless you create them yourself.</p>

      <h2>What Works for Me</h2>
      <ul>
        <li>Morning routine before opening the laptop</li>
        <li>Dedicated workspace (even in Airbnbs)</li>
        <li>Clear work hours – and sticking to them</li>
        <li>Regular video calls to stay connected</li>
      </ul>

      <h2>The Nomad Part</h2>
      <p>Being able to work from anywhere is a privilege. Coffee shops in Vienna, co-working spaces in Lisbon, balconies overlooking the sea. The variety keeps things fresh.</p>
    `,
  },
  "learning-in-public": {
    title: "Learning in Public",
    date: new Date("2025-01-05"),
    readTime: 4,
    description: "Why I share what I learn",
    type: "personal",
    content: `
      <h2>The Concept</h2>
      <p>Learning in public means sharing your journey – the wins, the failures, the confusion. It's vulnerable but incredibly valuable.</p>

      <h2>Why It Works</h2>
      <ul>
        <li><strong>Accountability:</strong> Public commitment keeps you going</li>
        <li><strong>Feedback:</strong> People correct your mistakes (free mentoring!)</li>
        <li><strong>Connections:</strong> You find others on the same path</li>
        <li><strong>Documentation:</strong> Your future self will thank you</li>
      </ul>

      <h2>How I Do It</h2>
      <p>This blog, LinkedIn posts, occasional Twitter threads. Nothing fancy – just honest sharing of what I'm learning and building.</p>
    `,
  },
  "ai-tools-daily": {
    title: "AI Tools I Use Daily",
    date: new Date("2024-12-28"),
    readTime: 5,
    description: "My daily AI toolkit for productivity",
    type: "personal",
    content: `
      <h2>The Daily Drivers</h2>
      <p>AI has become essential to my workflow. Here's what I actually use every day:</p>

      <h2>For Coding</h2>
      <ul>
        <li><strong>Claude:</strong> Complex problem solving, architecture decisions</li>
        <li><strong>GitHub Copilot:</strong> In-editor code completion</li>
        <li><strong>Cursor:</strong> AI-powered IDE for bigger refactors</li>
      </ul>

      <h2>For Content</h2>
      <ul>
        <li><strong>Claude:</strong> Writing, editing, brainstorming</li>
        <li><strong>Midjourney:</strong> Visual content when needed</li>
      </ul>

      <h2>For Automation</h2>
      <ul>
        <li><strong>n8n + OpenAI:</strong> Automated workflows</li>
        <li><strong>Custom agents:</strong> Built with Claude API</li>
      </ul>

      <h2>The Philosophy</h2>
      <p>AI isn't about doing less – it's about doing more of what matters. Automate the boring stuff, focus on the creative.</p>
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
