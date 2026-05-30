import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
  Instagram,
  Mail,
  Menu,
  Moon,
  Sun,
  Target,
  X,
} from "lucide-react";

const navItems = [
  { label: "소개", href: "#about" },
  { label: "주요사업", href: "#programs" },
  { label: "공지사항", href: "#notice" },
];

const aboutItems = [
  {
    icon: Mail,
    emoji: "✉️",
    title: "인사말",
    text: "전남과 광주의 교육 현장에 미래 기술과 따뜻한 배움을 연결합니다. 협회는 학생, 교사, 지역사회가 함께 성장하는 교육 생태계를 만들기 위해 현장 가까이에서 움직입니다.",
  },
  {
    icon: Target,
    emoji: "🎯",
    title: "설립목적 및 미션",
    text: "AI, 디지털, 창의 융합 교육을 통해 누구나 미래 역량을 키울 수 있는 기반을 만듭니다. 지역 교육 격차를 줄이고 실천형 미래 교육 모델을 확산하는 것이 우리의 핵심 미션입니다.",
  },
  {
    icon: CalendarDays,
    emoji: "📅",
    title: "주요 연혁",
    text: "지역 교육기관, 전문가, 커뮤니티와 함께 실천형 미래융합교육 활동을 확장하고 있습니다. 교육 프로그램, 콘텐츠 개발, 협력 프로젝트를 단계적으로 축적해 나가고 있습니다.",
  },
];

const programs = [
  {
    emoji: "🤖",
    title: "4차 산업 핵심 기술 교육",
    desc: "AI, 코딩, 로봇, 데이터 리터러시를 현장 중심 커리큘럼으로 제공합니다.",
    extraLinkLabel: "헥사보드 센서패키지 (로보몰) 🛒",
    extraHref:
      "https://robomall.co.kr/product/detail.html?product_no=26296&cate_no=670&display_group=1",
  },
  {
    emoji: "💡",
    title: "융합 교육 콘텐츠 개발",
    desc: "교실과 지역에서 바로 활용할 수 있는 프로젝트형 콘텐츠를 기획합니다.",
  },
  {
    emoji: "🤝",
    title: "지역사회 교육 격차 해소",
    desc: "교육 접근성이 낮은 대상에게 지속 가능한 배움의 기회를 연결합니다.",
  },
];

const instagramFeedUrl = "https://84aca62eefd54b8b955b151cff73cf51.elf.site";
const instagramProfileUrl = "https://www.instagram.com/jg_mirae";

const researchGroups = [
  { name: "셈틀지기", emoji: "💻" },
  { name: "과나연", emoji: "🧠" },
  { name: "금융교육", emoji: "💰" },
];

function scrollToSection(event, href) {
  event.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

function NavLink({ item, onClick }) {
  return (
    <a
      href={item.href}
      onClick={(event) => {
        scrollToSection(event, item.href);
        onClick?.();
      }}
      className="rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition-all duration-300 hover:bg-blue-500/10 hover:text-blue-700 dark:text-slate-200 dark:hover:text-blue-200"
    >
      {item.label}
    </a>
  );
}

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-stone-50/82 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/78">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#hero"
          onClick={(event) => scrollToSection(event, "#hero")}
          className="flex min-w-0 items-center gap-2"
          aria-label="상단으로 이동"
        >
          <img
            src="/logo.png"
            alt="사단법인 전남광주미래융합교육협회 로고"
            className="h-9 w-9 rounded-xl object-contain ring-1 ring-slate-200/80 dark:bg-white dark:ring-white/20"
          />
          <span className="truncate text-sm font-black tracking-normal text-slate-950 sm:text-base dark:text-white">
            전남광주미래융합교육협회 🚀
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setDarkMode((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/80 text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-100 dark:hover:text-blue-200"
            aria-label={darkMode ? "라이트 모드로 변경" : "다크 모드로 변경"}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href={instagramProfileUrl}
            target="_blank"
            rel="noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/80 text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-fuchsia-300 hover:text-fuchsia-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-100 dark:hover:text-fuchsia-200"
            aria-label="인스타그램 열기"
          >
            <Instagram size={18} />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/80 text-slate-800 shadow-sm transition-all duration-300 md:hidden dark:border-white/10 dark:bg-white/10 dark:text-slate-100"
            aria-label="모바일 메뉴"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-200/70 bg-stone-50/95 px-4 py-3 md:hidden dark:border-white/10 dark:bg-slate-950/95">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                item={item}
                onClick={() => setMenuOpen(false)}
              />
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-stone-50 dark:bg-slate-950"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.14),transparent_32%),linear-gradient(180deg,#fafaf9_0%,#fff7ed_100%)] dark:bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.22),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.16),transparent_32%),linear-gradient(180deg,#020617_0%,#111827_100%)]" />
      <div className="mx-auto grid min-h-[calc(100vh-68px)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-bold text-blue-700 shadow-sm dark:border-blue-300/20 dark:bg-white/10 dark:text-blue-200">
            🎓 💻 🧠 ✨ 미래를 배우는 지역 교육 네트워크
          </div>
          <h1 className="max-w-4xl text-3xl font-black leading-[1.12] tracking-normal text-slate-950 sm:text-4xl lg:text-6xl dark:text-white">
            미래융합교육의 중심,
            <span className="mt-2 block bg-gradient-to-r from-blue-600 via-indigo-600 to-fuchsia-500 bg-clip-text text-transparent">
              전남과 광주에서 시작합니다
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
            사단법인 전남광주미래융합교육협회는 기술과 인문, 학교와
            지역사회를 잇는 실천형 교육 활동으로 더 넓은 배움의 가능성을
            만듭니다.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#about"
              onClick={(event) => scrollToSection(event, "#about")}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-4 text-sm font-black text-white shadow-glow transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-100"
            >
              협회 소개 보기
              <ChevronRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#programs"
              onClick={(event) => scrollToSection(event, "#programs")}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/70 px-6 py-4 text-sm font-black text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:text-blue-700 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:text-blue-200"
            >
              주요 활동 살펴보기 💡
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-500/18 to-fuchsia-500/18 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/76 p-5 shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/10">
            <img
              src="/logo.png"
              alt="전남광주미래융합교육협회 로고"
              className="mx-auto w-full max-w-sm rounded-2xl bg-white object-contain p-4"
            />
            <div className="mt-6">
              <div className="mb-3 flex items-center justify-center gap-2 text-xs font-black text-slate-500 dark:text-slate-300">
                <span className="h-px flex-1 bg-slate-200 dark:bg-white/15" />
                <span>세 연구회의 미래융합 네트워크</span>
                <span className="h-px flex-1 bg-slate-200 dark:bg-white/15" />
              </div>
              <div className="grid grid-cols-3 gap-2 text-center sm:gap-3">
                {researchGroups.map((group, index) => (
                  <div
                    key={group.name}
                    className="group relative overflow-hidden rounded-2xl bg-slate-950 px-2 py-4 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-glow dark:bg-white dark:text-slate-950"
                  >
                    <span className="absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-80" />
                    <span className="mb-2 block text-2xl transition-transform duration-300 group-hover:scale-110">
                      {group.emoji}
                    </span>
                    <span className="block text-sm font-black leading-tight sm:text-base">
                      {group.name}
                    </span>
                    <span className="mt-2 block text-[10px] font-bold text-blue-200 dark:text-blue-700">
                      0{index + 1} LAB
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 rounded-2xl border border-blue-200 bg-blue-50/70 px-4 py-3 text-center text-sm font-black text-blue-800 dark:border-blue-300/20 dark:bg-blue-500/10 dark:text-blue-100">
                💫 셈틀지기 × 과나연 × 금융교육, 함께 만드는 융합교육
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-sm font-black text-blue-700 dark:text-blue-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-normal text-slate-950 sm:text-4xl dark:text-white">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
        {desc}
      </p>
    </div>
  );
}

function About() {
  const [activeAbout, setActiveAbout] = useState(0);
  const ActiveIcon = aboutItems[activeAbout].icon;

  return (
    <section id="about" className="bg-white py-16 sm:py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="ABOUT ✨"
          title="미래융합교육의 중심"
          desc="지역의 교육 자원과 미래 기술을 연결해 누구나 성장할 수 있는 배움의 생태계를 조성합니다."
        />
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-3 gap-2 rounded-3xl border border-slate-200 bg-stone-50 p-2 shadow-sm dark:border-white/10 dark:bg-white/5">
            {aboutItems.map(({ emoji, title }, index) => (
              <button
                key={title}
                type="button"
                onClick={() => setActiveAbout(index)}
                className={`min-h-16 rounded-2xl px-2 py-3 text-center text-xs font-black transition-all duration-300 sm:text-sm ${
                  activeAbout === index
                    ? "bg-slate-950 text-white shadow-glow dark:bg-white dark:text-slate-950"
                    : "text-slate-600 hover:bg-white hover:text-blue-700 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-blue-200"
                }`}
                aria-pressed={activeAbout === index}
              >
                <span className="mb-1 block text-xl sm:text-2xl">{emoji}</span>
                <span className="block leading-tight">{title}</span>
              </button>
            ))}
          </div>

          <article className="mt-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 dark:border-white/10 dark:bg-white/5 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-black text-blue-700 dark:text-blue-300">
                  0{activeAbout + 1}
                </p>
                <h3 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">
                  {aboutItems[activeAbout].emoji} {aboutItems[activeAbout].title}
                </h3>
              </div>
              <span
                className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-500/10 text-blue-700 dark:text-blue-200"
                aria-hidden="true"
              >
                <ActiveIcon size={22} />
              </span>
            </div>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
              {aboutItems[activeAbout].text}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section
      id="programs"
      className="bg-stone-50 py-16 sm:py-20 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="PROGRAMS 🚀"
          title="주요 사업 및 활동"
          desc="현장에 필요한 미래 역량을 중심으로 교육, 콘텐츠, 지역 협력을 함께 설계합니다."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.title}
              className="flex min-h-[260px] flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-soft dark:border-white/10 dark:bg-white/5"
            >
              <span className="text-5xl">{program.emoji}</span>
              <h3 className="mt-6 text-xl font-black text-slate-950 dark:text-white">
                {program.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {program.desc}
              </p>
              <div className="mt-6 flex flex-col gap-2">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-black text-slate-800 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white dark:border-white/15 dark:text-white dark:hover:border-blue-400"
                >
                  상세 보기 (노션) ✨
                  <ArrowUpRight size={16} />
                </a>
                {program.extraHref && (
                  <a
                    href={program.extraHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200 bg-gradient-to-r from-lime-100 via-emerald-100 to-teal-100 px-5 py-3 text-sm font-black text-emerald-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:from-lime-200 hover:via-emerald-200 hover:to-teal-200 hover:shadow-glow dark:border-emerald-300/30 dark:from-lime-300/20 dark:via-emerald-300/20 dark:to-teal-300/20 dark:text-emerald-100"
                  >
                    {program.extraLinkLabel}
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Notice() {
  return (
    <section id="notice" className="bg-white py-16 sm:py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="INSTAGRAM 📸"
          title="협회 소식"
          desc="전남광주미래융합교육협회의 최신 활동과 공지사항을 인스타그램 피드로 만나보세요."
        />
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-stone-50 shadow-soft dark:border-white/10 dark:bg-white/5">
          <div className="flex flex-col gap-3 border-b border-slate-200 bg-white/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:bg-white/5">
            <div>
              <p className="text-sm font-black text-slate-950 dark:text-white">
                최신 인스타그램 피드 ✨
              </p>
              <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                피드가 보이지 않으면 아래 버튼으로 새 창에서 확인할 수 있습니다.
              </p>
            </div>
            <a
              href={instagramProfileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-sm font-black text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-100"
            >
              인스타그램 소식 보기 📸
              <ArrowUpRight size={16} />
            </a>
          </div>
          <iframe
            title="전남광주미래융합교육협회 인스타그램 피드"
            src={instagramFeedUrl}
            loading="lazy"
            className="h-[620px] w-full bg-white sm:h-[720px]"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 px-4 py-10 text-slate-300 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt=""
              className="h-10 w-10 rounded-xl bg-white object-contain p-1"
            />
            <p className="text-base font-black text-white">
              사단법인 전남광주미래융합교육협회
            </p>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-7">
            대표자: 최명호 | 주소: [협회 주소] | 이메일: [이메일 주소]
          </p>
        </div>
        <p className="text-sm text-slate-400">
          © 2026. 사단법인 전남광주미래융합교육협회. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-slate-900 transition-colors duration-300 dark:bg-slate-950">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Notice />
      </main>
      <Footer />
    </div>
  );
}
