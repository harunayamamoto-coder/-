import React, { useEffect, useState } from 'react';
import {
  ExternalLink,
  Heart,
  Leaf,
  MapPin,
  Menu,
  Share2,
  X,
} from 'lucide-react';

const flavors = [
  {
    id: 'matcha',
    name: 'うじ抹茶味',
    description:
      '香り高い宇治抹茶を贅沢に使用。ほろ苦さと甘みが絶妙な春の限定フレーバーです。',
    color: 'bg-teal-100',
    textColor: 'text-teal-900',
    label: '期間限定',
    labelColor: 'bg-teal-700',
    price: '300円 (税込)',
    emoji: '🍵',
  },
  {
    id: 'kibi',
    name: 'きび糖味',
    description:
      'サトウキビの素朴な甘みが、うどーなつのもちもち食感を一番引き立てる定番の味。',
    color: 'bg-cyan-50',
    textColor: 'text-cyan-900',
    label: '定番',
    labelColor: 'bg-cyan-600',
    price: '300円 (税込)',
    emoji: '🍩',
  },
];

const features = [
  {
    icon: '🥣',
    title: 'うどん生まれ',
    desc: 'うどんの原材料を使用して開発。他にはない「もっちもち」の食感が特徴です。',
  },
  {
    icon: '🧑‍🍳',
    title: 'お店で手作り',
    desc: 'ひとつひとつ丁寧にお店で手づくり。いつでも新鮮なおいしさをお届けします。',
  },
  {
    icon: '✨',
    title: '選べる楽しみ',
    desc: 'お好みのパウダーを自分で振って仕上げるスタイル。楽しみ方はあなた次第です。',
  },
];

const shakeSteps = [
  {
    step: '01',
    title: 'パウダーを選ぶ',
    desc: '「うじ抹茶味」か「きび糖味」のパウダーを1スプーン入れます。',
  },
  {
    step: '02',
    title: '袋をしっかり閉じる',
    desc: 'パウダーが漏れないよう、袋の口をしっかり閉じます。',
  },
  {
    step: '03',
    title: '5回シェイク！',
    desc: '全体にパウダーが馴染むよう、縦に5回大きく振ってください。',
  },
];

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#effcf8] font-sans text-slate-800 selection:bg-teal-200">
      <nav
        className={`fixed z-50 w-full transition-all duration-300 ${
          scrolled ? 'bg-[#f4fffc]/90 py-3 shadow-sm backdrop-blur-md' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-700 text-xl font-bold text-white">
              丸
            </div>
            <span className="hidden text-xl font-black tracking-tighter sm:block">
              丸亀うどーなつ <span className="text-sm text-teal-500">SPRING</span>
            </span>
          </div>

          <div className="hidden gap-8 text-sm font-bold uppercase tracking-widest md:flex">
            <a href="#about" className="transition-colors hover:text-teal-600">
              うどーなつとは
            </a>
            <a href="#flavor" className="transition-colors hover:text-teal-600">
              フレーバー
            </a>
            <a href="#howtoeat" className="transition-colors hover:text-teal-600">
              楽しみ方
            </a>
            <a
              href="https://jp.marugame.com/menu/udonut/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-teal-700 px-5 py-2 text-white shadow-md transition-all hover:bg-teal-800"
            >
              公式サイト
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <section className="relative overflow-hidden pb-20 pt-32">
        <div className="absolute right-0 top-0 -z-10 h-full w-1/2 rounded-l-[100px] bg-cyan-100/60 animate-pulse" />
        <div className="absolute left-10 top-20 h-20 w-20 rounded-full bg-teal-200 opacity-70 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 -z-10 h-40 w-40 rounded-full bg-emerald-100 opacity-60 blur-3xl" />

        <div className="container mx-auto flex flex-col items-center px-6 md:flex-row">
          <div className="space-y-6 text-center md:w-1/2 md:text-left">
            <div className="inline-block animate-bounce rounded-full bg-teal-500 px-4 py-1 text-xs font-bold text-white">
              今だけの春、届きました
            </div>
            <h1 className="text-5xl font-black leading-tight text-gray-900 md:text-7xl">
              もちもち、
              <br />
              <span className="italic text-teal-500">涼やかな香り。</span>
            </h1>
            <p className="mx-auto max-w-md text-lg text-slate-600 md:mx-0">
              丸亀製麺自慢のうどんから生まれた、全く新しいドーナツ。期間限定の「うじ抹茶味」で、春の訪れを感じて。
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <a
                href="#flavor"
                className="flex items-center justify-center gap-2 rounded-2xl bg-teal-700 px-8 py-4 font-bold text-white shadow-lg shadow-teal-200 transition-transform hover:-translate-y-[2px]"
              >
                <Leaf size={20} /> 抹茶味をチェック
              </a>
              <a
                href="https://jp.marugame.com/shop/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border-2 border-cyan-200 bg-white/90 px-8 py-4 font-bold text-cyan-700 transition-colors hover:bg-cyan-50"
              >
                お近くの店舗を探す
              </a>
            </div>
          </div>

          <div className="relative mt-12 flex justify-center md:mt-0 md:w-1/2">
            <div className="relative h-72 w-72 md:h-96 md:w-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-400 via-cyan-300 to-emerald-200 opacity-30 animate-[spin_10s_linear_infinite]" />
              <div className="absolute left-1/2 top-1/2 flex h-64 w-64 -translate-x-1/2 -translate-y-1/2 rotate-3 flex-col items-center justify-center rounded-3xl bg-white/95 p-8 text-center shadow-2xl ring-1 ring-teal-100 md:h-80 md:w-80">
                <div className="mb-4 text-6xl">🍩</div>
                <div className="text-2xl font-black text-teal-800">うじ抹茶</div>
                <div className="mt-2 text-sm text-slate-500">もちもち食感 × 宇治抹茶</div>
                <div className="mt-4 rounded-full bg-teal-100 px-4 py-1 text-xs font-bold text-teal-700">
                  期間限定
                </div>
              </div>
              <div className="absolute right-0 top-0 text-4xl animate-bounce">💧</div>
              <div className="absolute bottom-10 left-0 text-4xl animate-bounce delay-700">
                🍃
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#f7fffd] py-20">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black">丸亀うどーなつ 3つの秘密</h2>
            <div className="mx-auto h-1 w-16 bg-teal-500" />
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl bg-[#ecfbf7] p-8 text-center transition-colors hover:bg-cyan-50"
              >
                <div className="mb-6 text-5xl transition-transform group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="mb-4 text-xl font-bold">{feature.title}</h3>
                <p className="leading-relaxed text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="flavor" className="overflow-hidden py-20">
        <div className="container mx-auto px-6">
          <div className="mb-16 flex flex-col items-center">
            <span className="font-bold uppercase tracking-widest text-teal-700">
              Special Flavor
            </span>
            <h2 className="mt-2 text-4xl font-black">選べる2つの幸せ</h2>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {flavors.map((flavor) => (
              <div
                key={flavor.id}
                className={`${flavor.color} group relative overflow-hidden rounded-[40px] p-8 transition-all duration-500 hover:shadow-xl md:p-12`}
              >
                <div className="relative z-10">
                  <span
                    className={`${flavor.labelColor} rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white`}
                  >
                    {flavor.label}
                  </span>
                  <h3 className={`mb-6 mt-4 text-4xl font-black ${flavor.textColor}`}>
                    {flavor.name}
                  </h3>
                  <p className="mb-8 max-w-xs leading-relaxed text-slate-700">
                    {flavor.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-black">{flavor.price}</span>
                    <span className="text-xs text-slate-500">(1袋5個入り)</span>
                  </div>
                </div>
                <div className="absolute bottom-[-20px] right-[-20px] flex h-48 w-48 rotate-[-15deg] items-center justify-center rounded-full bg-white/40 text-7xl transition-transform duration-700 group-hover:rotate-0">
                  {flavor.emoji}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="howtoeat"
        className="rounded-t-[60px] bg-slate-900 py-20 text-white md:rounded-t-[100px]"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-16 md:flex-row">
            <div className="md:w-1/2">
              <h2 className="mb-8 text-4xl font-black leading-tight md:text-5xl">
                おいしさの決め手は
                <br />
                <span className="text-cyan-300">「5回のシェイク」</span>
              </h2>
              <div className="space-y-8">
                {shakeSteps.map((item) => (
                  <div key={item.step} className="flex items-start gap-6">
                    <span className="text-2xl font-black text-teal-300">{item.step}</span>
                    <div>
                      <h4 className="mb-1 text-xl font-bold">{item.title}</h4>
                      <p className="text-slate-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center md:w-1/2">
              <div className="flex h-80 w-64 flex-col items-center justify-center rounded-3xl border-2 border-dashed border-cyan-200/30 bg-cyan-100/10 animate-[bounce_2s_infinite]">
                <div className="mb-4 text-6xl">🛍️</div>
                <div className="text-xl font-bold text-cyan-300">SHAKE IT!</div>
                <p className="mt-2 text-sm text-slate-300">楽しく振っておいしく！</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-900 px-6 py-12 text-slate-400">
        <div className="container mx-auto">
          <div className="mb-12 flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-700 text-sm font-bold text-white">
                丸
              </div>
              <span className="text-lg font-black text-white">丸亀うどーなつ</span>
            </div>
            <div className="flex gap-6">
              <Share2 className="cursor-pointer transition-colors hover:text-white" size={20} />
              <Heart className="cursor-pointer transition-colors hover:text-teal-300" size={20} />
              <MapPin className="cursor-pointer transition-colors hover:text-white" size={20} />
            </div>
          </div>
          <p>※店舗により販売状況が異なる場合がございます。あらかじめご了承ください。</p>
        </div>
      </footer>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-[#f4fffc] p-10 text-2xl font-black text-slate-800">
          <button className="absolute right-6 top-6" onClick={() => setIsMenuOpen(false)}>
            <X size={32} />
          </button>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            うどーなつとは
          </a>
          <a href="#flavor" onClick={() => setIsMenuOpen(false)}>
            フレーバー
          </a>
          <a href="#howtoeat" onClick={() => setIsMenuOpen(false)}>
            楽しみ方
          </a>
          <a
            href="https://jp.marugame.com/menu/udonut/"
            target="_blank"
            rel="noreferrer"
            className="text-teal-700"
          >
            公式サイト
          </a>
        </div>
      )}

      <div className="fixed bottom-6 left-1/2 z-40 w-[90%] -translate-x-1/2 md:hidden">
        <a
          href="https://jp.marugame.com/menu/udonut/"
          target="_blank"
          rel="noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-teal-700 py-4 font-bold text-white shadow-2xl shadow-teal-900/20"
        >
          店舗検索・詳細はこちら <ExternalLink size={18} />
        </a>
      </div>
    </div>
  );
};

export default App;
