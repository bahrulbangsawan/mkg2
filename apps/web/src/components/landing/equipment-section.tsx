import { equipmentContent } from "@/data/landing-content";

export function EquipmentSection() {
  return (
    <section className="bg-background py-16 sm:py-24" id="armada">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 font-semibold text-3xl text-foreground leading-tight sm:text-4xl lg:text-5xl">
            {equipmentContent.headline}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {equipmentContent.description}
          </p>
        </div>

        {/* Equipment Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {equipmentContent.items.map((item, index) => (
            <div className="flex flex-col gap-6" key={item.id}>
              {/* Image */}
              <div
                className={`aspect-square overflow-hidden rounded-3xl ${
                  index === 0
                    ? "border-4 border-white/30 bg-gradient-to-br from-foreground/80 to-foreground"
                    : "border border-border bg-muted"
                }`}
              >
                <div className="flex size-full items-center justify-center">
                  <div className="text-center">
                    <div
                      className={`mx-auto mb-3 flex size-16 items-center justify-center rounded-xl ${
                        index === 0 ? "bg-white/20" : "bg-white"
                      }`}
                    >
                      <span
                        className={`font-bold text-2xl ${
                          index === 0 ? "text-white" : "text-foreground"
                        }`}
                      >
                        {item.title.charAt(0)}
                      </span>
                    </div>
                    <p
                      className={`font-medium text-sm ${
                        index === 0 ? "text-white/70" : "text-muted-foreground"
                      }`}
                    >
                      Image Placeholder
                    </p>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold text-foreground text-xl">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
