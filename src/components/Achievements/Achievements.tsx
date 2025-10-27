import { personal } from '@/appData/personal'

const Achievements = () => {
  return (
    <section id="achievements" className="bg-base-200 py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* LEFT-ALIGNED TITLE - Same style as other sections */}
        <h2 className="mb-10 text-left text-3xl font-bold text-neutral md:text-4xl">
          // Key Achievements
        </h2>
        
        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {personal.achievements?.map((achievement, index) => (
            <div
              key={index}
              className="rounded-lg bg-base-100 p-6 text-center shadow-lg transition-transform hover:scale-105"
            >
              {/* Metric Number */}
              <div className="mb-2 text-4xl font-bold text-accent">
                {achievement.metric}
              </div>
              
              {/* Label */}
              <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral">
                {achievement.label}
              </div>
              
              {/* Description - Same color as Hero tagline */}
              <p className="text-xs text-neutral opacity-70">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
