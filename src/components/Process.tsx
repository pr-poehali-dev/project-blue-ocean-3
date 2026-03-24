import { useEffect, useRef, useState } from "react"

const steps = [
  {
    number: "01",
    title: "Старт",
    description:
      "Расскажите о вашем бизнесе: ниша, аудитория, тон общения. Ассистент запомнит голос вашего бренда раз и навсегда.",
  },
  {
    number: "02",
    title: "Генерация",
    description:
      "Выберите формат — пост, реклама, ответ клиенту или идея акции. ИИ создаст несколько вариантов за секунды.",
  },
  {
    number: "03",
    title: "Правки",
    description:
      "Выберите лучший вариант и при необходимости скорректируйте его. Ассистент учится на ваших предпочтениях с каждым использованием.",
  },
  {
    number: "04",
    title: "Публикация",
    description:
      "Копируйте готовый текст прямо в соцсеть или мессенджер. Сохраняйте контент в библиотеку для повторного использования.",
  },
]

export function Process() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="process" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column - Sticky Header */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p
                className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Тарифы
              </p>
              <h2
                className={`font-serif text-4xl md:text-5xl font-light text-foreground mb-6 text-balance transition-all duration-1000 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Как это
                <span className="italic"> работает</span>
              </h2>
              <p
                className={`text-muted-foreground leading-relaxed transition-all duration-1000 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Четыре простых шага — и качественный контент готов. Без найма копирайтеров, без долгих согласований.
              </p>

              {/* Pricing blocks */}
              <div className={`mt-12 space-y-4 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <div className="border border-border p-6">
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">Базовый</p>
                  <p className="font-serif text-3xl text-sage mb-2">990 ₽<span className="text-base text-muted-foreground">/мес</span></p>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground">До 50 генераций</li>
                    <li className="text-sm text-muted-foreground">Посты для соцсетей</li>
                    <li className="text-sm text-muted-foreground">Простые рекламные тексты</li>
                  </ul>
                </div>
                <div className="border border-sage p-6 bg-sage/5">
                  <p className="text-xs tracking-widest uppercase text-terracotta mb-1">Стандарт · Популярный</p>
                  <p className="font-serif text-3xl text-sage mb-2">2 490 ₽<span className="text-base text-muted-foreground">/мес</span></p>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground">До 200 генераций</li>
                    <li className="text-sm text-muted-foreground">Тексты + идеи контента</li>
                    <li className="text-sm text-muted-foreground">Ответы клиентам</li>
                    <li className="text-sm text-muted-foreground">Контент-план</li>
                  </ul>
                </div>
                <div className="border border-border p-6">
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">Премиум</p>
                  <p className="font-serif text-3xl text-sage mb-2">4 990 ₽<span className="text-base text-muted-foreground">/мес</span></p>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground">500+ генераций</li>
                    <li className="text-sm text-muted-foreground">AI-ответы клиентам</li>
                    <li className="text-sm text-muted-foreground">Генерация стратегий</li>
                    <li className="text-sm text-muted-foreground">Приоритетная поддержка</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Steps */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`group py-10 lg:py-14 border-t border-border last:border-b transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <div className="flex gap-8 lg:gap-12">
                    <span className="font-serif text-4xl lg:text-5xl text-stone/50 group-hover:text-sage transition-colors duration-500">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed max-w-xl">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}