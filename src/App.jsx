import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChevronRight,
  Instagram,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { label: "소개", page: "about" },
  { label: "조직도", page: "organization" },
  { label: "주요사업", href: "#programs" },
  { label: "공지사항", href: "#notice" },
  { label: "참여연구회", page: "research" },
  { label: "유관기관", href: "#partners" },
];

const programs = [
  {
    emoji: "🤖",
    title: "4차 산업 핵심 기술 교육",
    desc: "AI, 코딩, 로봇, 데이터 리터러시를 현장 중심 커리큘럼으로 제공합니다.",
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

const heroBanners = [
  "/banner-1.jpg",
  "/banner-2.jpg",
  "/banner-3.jpg",
  "/banner-4.jpg",
];

const researchGroups = [
  { name: "셈틀지기", emoji: "💻" },
  { name: "과나연", emoji: "🧠" },
  { name: "금융경제", emoji: "💰" },
  { name: "방송영상", emoji: "🎬" },
];

const partnerOrganizations = [
  {
    name: "광주전파관리소",
    logo: "/gwangju-radio.png",
    href: "https://www.crms.go.kr/lay1/bbs/S1T245C246/G/60/list.do",
  },
  {
    name: "국세청",
    logo: "/nts.png",
    href: "https://www.nts.go.kr/",
  },
  {
    name: "국민권익위원회",
    logo: "/acrc.png",
    href: "https://www.acrc.go.kr/",
  },
];

const departments = [
  {
    name: "기획부",
    roles: ["초등팀장 : 명정은", "중등팀장 : 김성영", "김동욱"],
  },
  {
    name: "홍보부",
    roles: ["팀장 : 박재근", "팀장 : 김영현", "조현기"],
  },
  {
    name: "총무부",
    roles: ["초등팀장 : 정지훈", "중등팀장 : 양진석", "나정호"],
  },
  {
    name: "회계부",
    roles: ["초등팀장 : 강민희", "중등팀장 : 김한도", "임정한"],
  },
];

const researchClubSections = [
  {
    name: "셈틀지기",
    field: "AI·코딩·디지털 창의교육",
    summary: "컴퓨팅 사고력과 문제해결력을 중심으로 미래형 수업 모델을 연구합니다.",
    accent: "from-blue-700 to-cyan-500",
  },
  {
    name: "과나연",
    field: "과학·기술·융합탐구",
    summary: "과학기술 기반 탐구 활동과 지역 연계 융합교육 콘텐츠를 기획합니다.",
    accent: "from-emerald-700 to-lime-500",
  },
  {
    name: "금융경제",
    field: "경제이해·금융문해력 교육",
    summary: "생활 속 경제와 금융 의사결정 역량을 키우는 교육 모델을 만듭니다.",
    accent: "from-amber-600 to-yellow-400",
  },
  {
    name: "방송영상",
    field: "미디어·콘텐츠·영상교육",
    summary: "디지털 미디어 표현력과 영상 제작 역량을 교육 활동과 연결합니다.",
    accent: "from-fuchsia-700 to-rose-500",
  },
];

function scrollToSection(event, href) {
  event.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

function NavLink({ item, onClick, onNavigateHome }) {
  return (
    <a
      href={item.href || "#"}
      onClick={(event) => {
        event.preventDefault();
        if (item.page) {
          onNavigateHome?.(item.page);
          window.scrollTo({ top: 0, behavior: "smooth" });
          onClick?.();
          return;
        }

        onNavigateHome?.("home");
        window.setTimeout(() => {
          document
            .querySelector(item.href)
            ?.scrollIntoView({ behavior: "smooth" });
        }, 0);
        onClick?.();
      }}
      className="rounded-full px-2.5 py-2 text-base font-black text-slate-800 transition-all duration-300 hover:bg-blue-500/10 hover:text-blue-700 dark:text-slate-100 dark:hover:text-blue-200 xl:text-lg"
    >
      {item.label}
    </a>
  );
}

function Header({ page, onPageChange }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-stone-50/90 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/86">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8 lg:py-5">
        <a
          href="#hero"
          onClick={(event) => {
            event.preventDefault();
            onPageChange("home");
            window.setTimeout(() => {
              document
                .querySelector("#hero")
                ?.scrollIntoView({ behavior: "smooth" });
            }, 0);
          }}
          className="flex min-w-0 items-center gap-3"
          aria-label="상단으로 이동"
        >
          <img
            src="/header-logo.png"
            alt="사단법인 전남광주미래융합교육협회 로고"
            className="h-12 w-12 rounded-xl bg-white object-contain p-1 ring-1 ring-slate-200/80 dark:bg-white dark:ring-white/20 sm:h-14 sm:w-14"
          />
          <span className="truncate text-lg font-black tracking-normal text-slate-950 sm:text-2xl dark:text-white">
            전남광주미래융합교육협회
          </span>
        </a>

        <div className="hidden items-center gap-0.5 md:flex">
          {navItems.map((item, index) => (
            <React.Fragment key={item.href}>
              {index > 0 && (
                <span className="h-4 w-px bg-slate-300/80 dark:bg-white/20" />
              )}
              <NavLink
                item={item}
                onNavigateHome={onPageChange}
              />
            </React.Fragment>
          ))}
          <span className="h-4 w-px bg-slate-300/80 dark:bg-white/20" />
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              onPageChange("support");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`rounded-full px-2.5 py-2 text-base font-black transition-all duration-300 xl:text-lg ${
              page === "support"
                ? "bg-blue-600 text-white"
                : "text-slate-800 hover:bg-blue-500/10 hover:text-blue-700 dark:text-slate-100 dark:hover:text-blue-200"
            }`}
          >
            후원
          </button>
        </div>

        <div className="flex items-center gap-2">
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
                onNavigateHome={onPageChange}
              />
            ))}
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                onPageChange("support");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`rounded-full px-3 py-2 text-left text-lg font-black transition-all duration-300 ${
                page === "support"
                  ? "bg-blue-600 text-white"
                  : "text-slate-800 hover:bg-blue-500/10 hover:text-blue-700 dark:text-slate-100 dark:hover:text-blue-200"
              }`}
            >
              후원
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ onPageChange }) {
  const [activeBanner, setActiveBanner] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveBanner((current) => (current + 1) % heroBanners.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-stone-50 dark:bg-slate-950"
    >
      <div className="absolute inset-0 z-0 bg-stone-100">
        {heroBanners.map((banner, index) => (
          <img
            key={banner}
            src={banner}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1600ms] ${
              activeBanner === index ? "opacity-90" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-slate-950/8" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-50/68 via-stone-50/44 to-stone-50/16" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,250,249,0.04),rgba(250,250,249,0.34)),radial-gradient(circle_at_18%_12%,rgba(59,130,246,0.08),transparent_30%)]" />
      </div>
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/70 bg-white/70 px-3 py-2 shadow-sm backdrop-blur">
        {heroBanners.map((banner, index) => (
          <button
            key={banner}
            type="button"
            onClick={() => setActiveBanner(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeBanner === index
                ? "w-8 bg-blue-700"
                : "w-2.5 bg-slate-400/70 hover:bg-blue-500"
            }`}
            aria-label={`배너 ${index + 1}번 보기`}
            aria-current={activeBanner === index ? "true" : undefined}
          />
        ))}
      </div>
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-bold text-blue-700 shadow-sm dark:border-blue-300/20 dark:bg-white/10 dark:text-blue-200">
            🎓 💻 🧠 ✨ 미래를 배우는 지역 교육 네트워크
          </div>
          <h1 className="max-w-4xl text-[2.05rem] font-black leading-[1.12] tracking-normal text-slate-950 [text-shadow:_0_4px_22px_rgb(255_255_255_/_0.98),_0_2px_8px_rgb(255_255_255_/_0.9),_0_1px_0_rgb(255_255_255_/_0.92)] sm:text-[2.7rem] lg:text-[3rem] xl:text-[3.18rem]">
            <span className="block lg:whitespace-nowrap">
              미래융합교육의 중심,
            </span>
            <span className="mt-2 block text-blue-800 [text-shadow:_0_4px_24px_rgb(255_255_255_/_0.98),_0_2px_8px_rgb(255_255_255_/_0.92),_0_1px_0_rgb(255_255_255_/_0.94)]">
              전남광주에서 시작합니다!
            </span>
          </h1>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                onPageChange("about");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
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

        <div className="relative mx-auto w-full max-w-md lg:max-w-xl">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-500/18 to-fuchsia-500/18 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/76 p-5 shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/10">
            <img
              src="/logo.png"
              alt="전남광주미래융합교육협회 로고"
              className="mx-auto w-full max-w-md rounded-2xl bg-white object-contain p-2 sm:p-3"
            />
            <div className="mt-6">
              <div className="mb-3 flex items-center justify-center gap-2 text-xs font-black text-slate-500 dark:text-slate-300">
                <span className="h-px flex-1 bg-slate-200 dark:bg-white/15" />
                <span>네 연구회의 미래융합 네트워크</span>
                <span className="h-px flex-1 bg-slate-200 dark:bg-white/15" />
              </div>
              <div className="grid grid-cols-2 gap-2 text-center sm:grid-cols-4 sm:gap-3">
                {researchGroups.map((group, index) => (
                  <div
                    key={group.name}
                    className="group relative overflow-hidden rounded-2xl bg-black/90 px-2 py-4 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-black/94 hover:shadow-glow dark:bg-black/90 dark:text-white"
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
              <p className="mt-4 rounded-2xl border border-blue-200 bg-blue-50/70 px-3 py-3 text-center text-xs font-black text-blue-800 dark:border-blue-300/20 dark:bg-blue-500/10 dark:text-blue-100 sm:text-sm lg:whitespace-nowrap">
                💫 셈틀지기 × 과나연 × 금융경제 × 방송영상, 함께 만드는 융합교육
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

function ChairmanGreetingPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <p className="text-sm font-black tracking-[0.18em] text-blue-700">
            GREETING
          </p>
          <h1 className="mt-4 text-3xl font-black text-slate-950 sm:text-5xl">
            이사장 인사말
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
            사단법인 전남광주미래융합교육협회 홈페이지를 찾아주신
            여러분께 진심으로 감사드립니다.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.45fr] lg:items-start">
          <aside className="rounded-2xl border border-slate-200 bg-stone-50 p-6">
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <img
                src="/header-logo.png"
                alt="전남광주미래융합교육협회 심볼"
                className="mx-auto h-28 w-28 object-contain"
              />
            </div>
            <div className="mt-6 border-t border-slate-200 pt-6">
              <p className="text-sm font-bold text-slate-500">
                사단법인 전남광주미래융합교육협회
              </p>
              <p className="mt-2 text-2xl font-black text-slate-950">
                이사장 최명호
              </p>
            </div>
          </aside>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8 lg:p-10">
            <h2 className="text-2xl font-black leading-snug text-slate-950 sm:text-3xl">
              미래융합교육의 가치가 지역의 배움으로 이어지도록
              함께하겠습니다.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-slate-700">
              <p>
                사단법인 전남광주미래융합교육협회 홈페이지를 찾아주신
                여러분께 진심으로 감사드립니다.
              </p>
              <p>
                저희 협회는 급변하는 미래사회에 필요한 디지털 역량과 창의적
                문제해결력을 지역 교육 현장에 안정적으로 확산하기 위해
                설립되었습니다. 또한 학생, 교사, 학부모, 지역사회가 함께
                성장할 수 있는 교육 기반을 마련하고,
                인공지능·디지털·과학기술·경제 교육 등 다양한 영역이
                유기적으로 연결되는 융합교육 생태계를 만들어가고자 합니다.
              </p>
              <p>
                저희 협회는 서로 다른 교과와 다양한 학교급에서 교육에 힘써
                온 선생님들이 뜻을 모아 출범한 교사 중심의 단체입니다. 교육의
                현장에서 쌓아 온 경험과 전문성을 바탕으로, 광주와 전남의
                교육이 서로 연결되고 함께 성장할 수 있는 새로운 길을
                열어가겠습니다.
              </p>
              <p>
                앞으로도 현장의 목소리를 소중히 듣고, 공공성과 전문성을
                바탕으로 지역사회에 신뢰받는 교육 법인이 되겠습니다. 많은
                관심과 성원을 부탁드립니다.
              </p>
              <p>감사합니다.</p>
            </div>
            <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-right">
              <p className="text-sm font-bold text-slate-500">
                사단법인 전남광주미래융합교육협회
              </p>
              <p className="text-xl font-black text-slate-950">
                이사장 최명호
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

function OrganizationPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <p className="text-sm font-black tracking-[0.18em] text-blue-700">
            ORGANIZATION
          </p>
          <h1 className="mt-4 text-3xl font-black text-slate-950 sm:text-5xl">
            조직도
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
            사단법인 전남광주미래융합교육협회의 운영 체계와 부서별
            담당 구성을 안내합니다.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-md rounded-2xl border border-blue-200 bg-white p-2 shadow-soft">
            <div className="rounded-xl bg-blue-700 px-5 py-3 text-center text-lg font-black text-white">
              이사장
            </div>
            <div className="px-5 py-5 text-center text-3xl font-black text-slate-950">
              최명호
            </div>
          </div>

          <div className="mx-auto h-10 w-px bg-slate-300" />

          <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
            <div className="rounded-xl bg-slate-700 px-5 py-3 text-center text-lg font-black text-white">
              감사
            </div>
            <div className="px-5 py-5 text-center text-3xl font-black text-slate-950">
              윤진영
            </div>
          </div>

          <div className="relative mt-12">
            <div className="absolute left-1/2 top-[-48px] hidden h-12 w-px -translate-x-1/2 bg-slate-300 lg:block" />
            <div className="absolute left-[12.5%] right-[12.5%] top-0 hidden h-px bg-slate-300 lg:block" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {departments.map((department) => (
                <article
                  key={department.name}
                  className="relative rounded-2xl border border-slate-200 bg-white p-2 shadow-soft"
                >
                  <div className="absolute left-1/2 top-[-16px] hidden h-4 w-px -translate-x-1/2 bg-slate-300 lg:block" />
                  <div className="rounded-xl bg-gradient-to-r from-blue-700 to-sky-600 px-4 py-3 text-center text-xl font-black text-white">
                    {department.name}
                  </div>
                  <ul className="space-y-3 px-4 py-5">
                    {department.roles.map((role) => (
                      <li
                        key={role}
                        className="text-center text-sm font-bold leading-6 text-slate-700"
                      >
                        {role}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <p className="mt-8 rounded-2xl border border-slate-200 bg-stone-50 px-5 py-4 text-sm leading-7 text-slate-600">
            조직도는 협회 운영 상황에 따라 변경될 수 있으며, 각 부서는
            미래융합교육 사업의 기획, 홍보, 총무, 회계 운영을 담당합니다.
          </p>

        </div>
      </section>
    </main>
  );
}

function ResearchClubsPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <p className="text-sm font-black tracking-[0.18em] text-blue-700">
            RESEARCH GROUPS
          </p>
          <h1 className="mt-4 text-3xl font-black text-slate-950 sm:text-5xl">
            참여연구회
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
            네 개 연구회가 각자의 전문 영역을 바탕으로 교육 프로그램,
            콘텐츠, 현장 활동을 함께 만들어갑니다.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="space-y-8">
          {researchClubSections.map((club, index) => (
            <article
              key={club.name}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft"
            >
              <div className={`h-2 bg-gradient-to-r ${club.accent}`} />
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.35fr]">
                <div className="border-b border-slate-200 bg-stone-50 p-6 lg:border-b-0 lg:border-r sm:p-8">
                  <p className="text-sm font-black text-slate-400">
                    연구회 0{index + 1}
                  </p>
                  <h2 className="mt-3 text-3xl font-black text-slate-950">
                    {club.name}
                  </h2>
                  <p className="mt-3 text-sm font-black text-blue-700">
                    {club.field}
                  </p>
                  <p className="mt-5 text-base leading-8 text-slate-600">
                    {club.summary}
                  </p>
                </div>

                <div className="space-y-5 p-6 sm:p-8">
                  {[1, 2].map((itemNumber) => (
                    <div
                      key={itemNumber}
                      className="grid gap-4 lg:grid-cols-2"
                    >
                      <div className="flex min-h-56 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-8 text-center">
                        <p className="text-lg font-black text-slate-950">
                          주요사업 {itemNumber}
                        </p>
                      </div>
                      <div className="flex min-h-56 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-stone-50 px-5 py-8 text-center">
                        <p className="text-lg font-black text-slate-500">
                          활동사진 {itemNumber}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
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

function Partners() {
  return (
    <section id="partners" className="bg-stone-50 py-16 sm:py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-black text-blue-700 dark:text-blue-300">
              NETWORK 🤝
            </p>
            <h2 className="mt-2 text-3xl font-black text-slate-950 dark:text-white">
              유관기관/단체
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            미래융합교육의 확산을 위해 함께 연결되는 기관과 단체입니다.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {partnerOrganizations.map((organization) => (
            <a
              key={organization.name}
              href={organization.href}
              target="_blank"
              rel="noreferrer"
              className="group relative flex min-h-[190px] items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-soft dark:border-white/10 dark:bg-white/5"
              aria-label={`${organization.name} 홈페이지 열기`}
            >
              <img
                src={organization.logo}
                alt={organization.name}
                className="max-h-24 max-w-full object-contain transition-all duration-500 group-hover:scale-95 group-hover:opacity-35"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-white/0 opacity-0 transition-all duration-500 group-hover:bg-white/88 group-hover:opacity-100 dark:group-hover:bg-white/90">
                <div className="translate-y-3 text-center transition-all duration-500 group-hover:translate-y-0">
                  <p className="text-xl font-black text-slate-950">
                    {organization.name}
                  </p>
                  <p className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-blue-700">
                    바로가기
                    <ArrowUpRight size={15} />
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function SupportPage() {
  return (
    <main className="bg-stone-50 dark:bg-slate-950">
      <section className="mx-auto min-h-[calc(100vh-88px)] max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <p className="text-sm font-black text-blue-700 dark:text-blue-300">
          SUPPORT 💙
        </p>
        <h1 className="mt-4 text-4xl font-black leading-tight text-slate-950 sm:text-5xl dark:text-white">
          후원
        </h1>
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/5 sm:p-8">
          <h2 className="text-2xl font-black text-slate-950 dark:text-white">
            미래융합교육을 함께 응원해주세요
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
            후원 안내 페이지입니다. 전남광주 미래융합교육 활동을 위한
            소중한 후원은 지역 교육 현장의 성장으로 이어집니다.
          </p>
          <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/80 p-5 dark:border-emerald-300/20 dark:bg-emerald-500/10">
            <p className="text-sm font-black tracking-[0.14em] text-emerald-700 dark:text-emerald-200">
              DONATION ACCOUNT
            </p>
            <p className="mt-3 text-xl font-black text-slate-950 dark:text-white">
              농협은행 301-0389-7923-91
            </p>
            <p className="mt-2 text-sm font-bold text-slate-600 dark:text-slate-300">
              예금주: 사단법인 전남광주미래융합교육협회
            </p>
          </div>
          <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50/70 p-5 dark:border-blue-300/20 dark:bg-blue-500/10">
            <p className="text-lg font-black text-slate-950 dark:text-white">
              2026년 기부금 모금액 및 활용실적
            </p>
            <p className="mt-2 text-sm font-bold text-slate-600 dark:text-slate-300">
              준비중입니다.
            </p>
          </div>
          <button
            type="button"
            className="mt-8 rounded-full bg-slate-950 px-6 py-4 text-sm font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-100"
          >
            후원 안내 준비중 ✨
          </button>
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 px-4 py-10 text-slate-300 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/header-logo.png"
              alt=""
              className="h-10 w-10 rounded-xl bg-white object-contain p-1.5"
            />
            <p className="text-base font-black text-white">
              사단법인 전남광주미래융합교육협회
            </p>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-7">
            대표자: 최명호 | 주소: 전남광주통합특별시 목포시 영산로59번길 15, 2층(무안동) | 이메일: choi-m-h@hanmail.net
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
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-slate-900 transition-colors duration-300 dark:bg-slate-950">
      <Header page={page} onPageChange={setPage} />
      {page === "support" ? (
        <SupportPage />
      ) : page === "about" ? (
        <ChairmanGreetingPage />
      ) : page === "organization" ? (
        <OrganizationPage />
      ) : page === "research" ? (
        <ResearchClubsPage />
      ) : (
        <main>
          <Hero onPageChange={setPage} />
          <Programs />
          <Notice />
          <Partners />
        </main>
      )}
      <Footer />
    </div>
  );
}
