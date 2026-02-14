import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeartCrack, Users, Heart } from "lucide-react";

// ============ FLOATING HEARTS BACKGROUND ============
function FloatingHearts({
  variant,
  paused = false,
}: {
  variant: "inicio" | "soltero" | "pareja";
  paused?: boolean;
}) {
  const hearts =
    variant === "pareja"
      ? ["💀", "🖕", "💔", "🤡", "😈", "🔥", "⚰️", "💩"]
      : variant === "soltero"
        ? ["🌹", "✨", "💖", "🦋", "🌸", "💐", "🌟", "💝"]
        : ["❤️", "💕", "💗", "💘", "💖", "✨", "🌹", "💝"];

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 transition-opacity duration-700"
      style={{ opacity: paused ? 0 : 1 }}
    >
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="floating-heart"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 14}px`,
            animationDuration: `${Math.random() * 8 + 6}s`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        >
          {hearts[i % hearts.length]}
        </span>
      ))}
    </div>
  );
}

// ============ PANTALLA DE INICIO ============
function PantallaInicio({
  onSelect,
}: {
  onSelect: (choice: "soltero" | "pareja") => void;
}) {
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.6 }}
      className="min-h-dvh flex flex-col items-center justify-center px-6 py-10 relative z-10"
    >
      {/* Title */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center mb-10"
      >
        <h1 className="font-display text-5xl sm:text-7xl font-semibold gradient-text leading-tight">
          Feliz San Valentín
        </h1>
      </motion.div>

      {/* Heart divider */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
        className="text-5xl mb-10 pulse-glow"
      >
        <Heart
          className="w-14 h-14 text-rosa-fuerte fill-rosa-fuerte"
          strokeWidth={1.5}
        />
      </motion.div>

      {/* Question */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="font-display text-2xl sm:text-3xl text-white text-center mb-8 italic"
      >
        Antes que nada... <br />
        <span className="text-rosa-claro font-bold not-italic">
          ¿Cual es tu situacion sentimental?
        </span>
      </motion.h2>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="flex flex-col sm:flex-row gap-5 w-full max-w-md"
      >
        {/* Pareja button */}
        <motion.button
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setHoveredBtn("pareja")}
          onHoverEnd={() => setHoveredBtn(null)}
          onClick={() => onSelect("pareja")}
          className="group relative flex-1 py-5 px-8 rounded-2xl font-body font-semibold text-lg
                     bg-gradient-to-br from-rosa-fuerte/80 to-rojo-intenso/80 text-white
                     border border-white/10 backdrop-blur-sm
                     transition-all duration-300 cursor-pointer
                     shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40"
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            <Users className="w-6 h-6" strokeWidth={2} />
            Tengo cuchurrumin
          </span>
          {hoveredBtn === "pareja" && (
            <motion.span
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="block text-sm text-white/60 mt-1"
            >
              que valiente...
            </motion.span>
          )}
        </motion.button>

        {/* Soltero button */}
        <motion.button
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setHoveredBtn("soltero")}
          onHoverEnd={() => setHoveredBtn(null)}
          onClick={() => onSelect("soltero")}
          className="group relative flex-1 py-5 px-8 rounded-2xl font-body font-semibold text-lg
                     bg-gradient-to-br from-purple-500/80 to-purple-700/80 text-white
                     border border-white/10 backdrop-blur-sm
                     transition-all duration-300 cursor-pointer
                     shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            <HeartCrack className="w-6 h-6" strokeWidth={2} />
            Soltero/a ando mejor
          </span>
          {hoveredBtn === "soltero" && (
            <motion.span
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="block text-sm text-white/60 mt-1"
            >
              y orgulloso/a
            </motion.span>
          )}
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

// ============ VISTA PAREJA (BURLA) ============
const frasesPareja = [
  " Al chile esa madre ni es real. ❌",
  " Al final todo se acaba no hay pedo 🥳",
  " Que bonita pareja... de pendejos 🤡",
  " Si tuviste que rogarle para que volviera kbron 😶‍🌫️",
  " Todavia sigues pensando en tu ex, a mi no me haces wey 🚩",
  " Traen puro sueño 😴",
  " Tic tac, tic tac...⌚",
  " Pero en el fondo... tambien quisiera a alguien que me quiera...",
  " Pero de mientras vayanse a chingar a su madre 🔥",
];

// ============ CALCULADORA DE TRUENE ============
const frasesTruene: Record<string, string[]> = {
  bajo: [
    "Hmm, parece que aguantan... por ahora 👀",
    "No se confien, el 80% de las parejas que dicen eso ya tronaron 📊",
    "Suertudos... o todavia no se enteran de algo 🤫",
  ],
  medio: [
    "Ps 50/50, como lanzar una moneda al aire 🪙",
    "Ni tan bien ni tan mal... pero mas mal que bien 💀",
    "Un mensaje sospechoso y ya valio padrino 📱",
  ],
  alto: [
    "Jajaja ya valio madres, nomas falta la fecha 💀",
    "La neta ya mejor ni sigan 😂",
    "Eso ya no es relacion, es un countdown pa la ruptura ⏰",
    "gg ff papa como diria renegul 🫡",
  ],
  extremo: [
    "IIII el pendejo, el pendejo 💀💀💀",
    "Ya no es cuestion de SI van a tronar, sino CUANDO 🔥",
    "Descanse en paz ⚰️",
    "Ps ni pedo no, ni estaba tan chida su relación la neta 🤷",
  ],
};

function CalculadoraTruene() {
  const [calculando, setCalculando] = useState(false);
  const [porcentaje, setPorcentaje] = useState<number | null>(null);
  const [frase, setFrase] = useState("");
  const [contador, setContador] = useState(0);

  const calcular = () => {
    setCalculando(true);
    setPorcentaje(null);
    setFrase("");
    setContador(0);

    // Animacion del contador subiendo
    const duracion = 2000;
    const inicio = Date.now();
    // Sesgar hacia porcentajes altos: minimo 45, maximo 99
    const resultado = Math.floor(Math.random() * 55) + 45;

    const intervalo = setInterval(() => {
      const progreso = Math.min((Date.now() - inicio) / duracion, 1);
      setContador(Math.floor(progreso * resultado));

      if (progreso >= 1) {
        clearInterval(intervalo);
        setPorcentaje(resultado);
        setCalculando(false);

        // Seleccionar frase segun rango
        let categoria: string;
        if (resultado < 55) categoria = "bajo";
        else if (resultado < 70) categoria = "medio";
        else if (resultado < 85) categoria = "alto";
        else categoria = "extremo";

        const frases = frasesTruene[categoria];
        setFrase(frases[Math.floor(Math.random() * frases.length)]);
      }
    }, 30);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1 }}
      className="glass-card rounded-3xl p-6 max-w-lg w-full mb-8 text-center border-red-500/20"
    >
      <h3 className="font-display text-lg text-white font-bold mb-2">
        🎰 Calcula el porcentaje de que terminen
      </h3>
      <p className="text-white/40 font-body text-sm mb-5">
        ¿Cuanto le queda a tu relacion? Averigualo aqui
      </p>

      {porcentaje === null && !calculando && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={calcular}
          className="px-8 py-3 bg-gradient-to-r from-rojo-intenso to-rosa-fuerte text-white
                     rounded-full font-body font-semibold cursor-pointer
                     shadow-lg shadow-red-500/30 hover:shadow-red-500/50
                     transition-shadow border border-red-400/20"
        >
          Calcular probabilidad 💔
        </motion.button>
      )}

      {(calculando || porcentaje !== null) && (
        <div className="mt-2">
          {/* Barra de progreso */}
          <div className="relative w-full h-5 bg-white/10 rounded-full overflow-hidden mb-4">
            <motion.div
              className="h-full rounded-full"
              initial={{ width: "0%" }}
              animate={{
                width: `${porcentaje ?? contador}%`,
                backgroundColor:
                  (porcentaje ?? contador) < 55
                    ? "#facc15"
                    : (porcentaje ?? contador) < 70
                      ? "#f97316"
                      : (porcentaje ?? contador) < 85
                        ? "#ef4444"
                        : "#dc2626",
              }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Numero grande */}
          <p className="font-display text-5xl sm:text-6xl font-black text-white mb-2">
            {porcentaje ?? contador}
            <span className="text-rojo-intenso">%</span>
          </p>

          <p className="text-white/40 font-body text-xs mb-4">
            probabilidad de que truenen
          </p>

          {/* Frase resultado */}
          <AnimatePresence>
            {frase && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="font-display text-lg text-dorado italic leading-relaxed mb-5"
              >
                "{frase}"
              </motion.p>
            )}
          </AnimatePresence>

          {/* Boton recalcular */}
          {porcentaje !== null && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={calcular}
              className="px-6 py-2.5 bg-white/10 hover:bg-white/15 text-white/70 hover:text-white
                         rounded-full font-body font-medium text-sm cursor-pointer
                         transition-colors border border-white/10"
            >
              Recalcular (aunque igual van a terminar) 🎲
            </motion.button>
          )}
        </div>
      )}
    </motion.div>
  );
}

function VistaPareja({
  onBack,
  onFaseChange,
}: {
  onBack: () => void;
  onFaseChange: (fase: string) => void;
}) {
  const [fase, setFase] = useState<"regalo" | "piolin" | "contenido">("regalo");
  const [fraseIndex, setFraseIndex] = useState(0);

  const cambiarFase = (nuevaFase: "regalo" | "piolin" | "contenido") => {
    setFase(nuevaFase);
    onFaseChange(nuevaFase);
  };

  const nextFrase = useCallback(() => {
    setFraseIndex((prev) => (prev + 1) % frasesPareja.length);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.6 }}
      className="min-h-dvh flex flex-col items-center px-5 py-8 relative z-10"
    >
      <AnimatePresence mode="wait">
        {/* FASE 1: Boton del regalo */}
        {fase === "regalo" && (
          <motion.div
            key="regalo"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex flex-col items-center justify-center text-center"
          >
            <motion.span
              className="text-7xl inline-block mb-8"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎁
            </motion.span>
            <h2 className="font-display text-3xl sm:text-4xl text-white font-bold mb-4">
              Hay un regalo especial <br /> para ti...
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => cambiarFase("piolin")}
              className="px-10 py-4 bg-gradient-to-r from-rosa-fuerte to-rojo-intenso text-white
                         rounded-2xl font-body font-semibold text-lg cursor-pointer
                         shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50
                         transition-shadow border border-white/10"
            >
              Abrir mi regalo 🎁
            </motion.button>
          </motion.div>
        )}

        {/* FASE 2: Piolin grosero */}
        {fase === "piolin" && (
          <motion.div
            key="piolin"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
            onClick={() => cambiarFase("contenido")}
          >
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 10 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative max-w-sm w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="/images/piolin.png"
                alt="Piolin grosero"
                className="w-full rounded-3xl shadow-2xl shadow-black/50"
              />
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => cambiarFase("contenido")}
                className="mt-6 w-full py-3 glass-card rounded-2xl text-white font-body
                           font-medium cursor-pointer border-white/20 hover:border-white/40
                           transition-colors text-center"
              >
                Continuar...
              </motion.button>
            </motion.div>
          </motion.div>
        )}

        {/* FASE 3: Contenido completo */}
        {fase === "contenido" && (
          <motion.div
            key="contenido"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center w-full"
          >
            {/* Header */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-6"
            >
              <span className="text-6xl skull-bounce inline-block">💀</span>
              <h1 className="font-display text-4xl sm:text-5xl font-black text-white mt-4">
                Tu y tu cuchurrumin vayan a {""}
                <span className="text-rojo-intenso italic">
                  chingar a su madre
                </span>
              </h1>
              <p className="text-white/40 font-body mt-2 text-base">
                Ojala terminen la neta
              </p>
            </motion.div>

            {/* Frase rotativa */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="glass-card rounded-3xl p-6 sm:p-8 max-w-lg w-full mb-6 text-center
                         border-rojo-intenso/30"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={fraseIndex}
                  initial={{ opacity: 0, y: 20, rotateX: 40 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -20, rotateX: -40 }}
                  transition={{ duration: 0.4 }}
                  className="font-display text-xl sm:text-2xl text-white italic leading-relaxed"
                >
                  "{frasesPareja[fraseIndex]}"
                </motion.p>
              </AnimatePresence>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextFrase}
                className="mt-5 px-6 py-2.5 bg-rojo-intenso/80 hover:bg-rojo-intenso text-white rounded-full
                           font-body font-medium text-sm transition-colors cursor-pointer
                           border border-red-400/20"
              >
                Dime mas 🔥
              </motion.button>
            </motion.div>

            {/* Consejo toxico */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="glass-card rounded-3xl p-6 max-w-lg w-full mb-8 text-center border-yellow-500/20"
            >
              <h3 className="font-display text-lg text-dorado font-bold mb-3">
                💡 Consejo del dia
              </h3>
              <p className="text-white/70 font-body text-base leading-relaxed">
                <span className="block text-rojo-intenso font-bold text-lg mt-2">
                  Al chile ya mejor ni regales nada padrino, ni te van a subir
                </span>
                <span className="block text-white/40 text-sm mt-2">
                  (y el dinero no se recupera, pero la dignidad tampoco)
                </span>
              </p>
            </motion.div>

            {/* Calculadora de truene */}
            <CalculadoraTruene />

            {/* Despedida */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="text-center mb-8"
            >
              <p className="text-white/50 font-body text-base mb-2">
                En fin, feliz 14 de febrero...
              </p>
              <p className="text-2xl sm:text-3xl font-display text-white font-bold">
                Pero mas feliz el dia que{" "}
                <span className="text-rojo-intenso">te manden alv</span> 💀🔥
              </p>
            </motion.div>

            {/* Back button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBack}
              className="px-8 py-3 rounded-full glass-card text-white/60 hover:text-white
                         font-body text-sm transition-colors cursor-pointer border-white/10
                         hover:border-white/30 mb-10"
            >
              ← Cambiar mi respuesta (al chile me terminaron)
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ============ VISTA SOLTERO (POSITIVA) ============
const afirmaciones = [
  "Estas mas chido/a que una orden de tacos al pastor, si awebo awebo",
  "Cuidado que los bombones se derriten con el sol",
  "Todo llega a su tiempo mi apa",
  "Por ti baby, seria batman",
  "No sabia que los dioses del olimpo habian regresado ",
  "REGRESA VALERIA, REGRESA VALERIA PORFAVOR ",
];

// ============ BOLA 8 DEL AMOR ============
const respuestasBola8 = [
  "Sí ✅",
  "Nel we, mejor ponte a hacer otra cosa ❌",
  "Las estrellas dicen que... mejor ni te digo 🤐",
  "Pregúntale a tu ex... ah no, ya te bloqueó 🚫",
  "Simón, pero en otra vida 🪦",
  "No te voy a contestar eso la neta 🙅",
  "Hay alguien que te pela... pero no te va a gustar quién es 👀",
  "Pregúntame de nuevo 🔁",
  "Todo apunta a que sí... es broma, no mames 🤡",
  "El universo dice: nel pastel 🚷",
  "Yeah yeah la muñeca fea, yupi yupi el muñeco chuki 🫠",
  "Quizá 🤔",
  "En 3 meses llega tu persona ideal. Fuente: me lo inventé 🔮",
  "No digas mamadas AJAJSJAS 😵",
  "Mejor concéntrate en tu carrera we 💼",
];

function Bola8Amor() {
  const [respuesta, setRespuesta] = useState<string | null>(null);
  const [sacudiendo, setSacudiendo] = useState(false);
  const [fase, setFase] = useState<"idle" | "shaking" | "done">("idle");

  const sacudir = () => {
    if (sacudiendo) return;
    setSacudiendo(true);
    setFase("shaking");
    setRespuesta(null);

    setTimeout(() => {
      const nueva =
        respuestasBola8[Math.floor(Math.random() * respuestasBola8.length)];
      setRespuesta(nueva);
      setSacudiendo(false);
      setFase("done");
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-3xl p-6 max-w-lg w-full mb-8 border-purple-500/20 text-center"
    >
      <h3 className="font-display text-lg text-white font-bold mb-2">
        🎱 Bola 8 del Amor
      </h3>
      <p className="text-white/40 font-body text-sm mb-6">
        Preguntame algo y te dire lo que el universo tiene que decirte...
      </p>

      {/* Bola 8 */}
      <motion.div
        className="relative mx-auto w-44 h-44 sm:w-52 sm:h-52 cursor-pointer select-none"
        onClick={sacudir}
        animate={
          sacudiendo
            ? {
                rotate: [0, -12, 12, -12, 12, -6, 6, 0],
                scale: [1, 1.05, 0.95, 1.05, 0.95, 1],
              }
            : { rotate: 0, scale: 1 }
        }
        transition={sacudiendo ? { duration: 1.2 } : { duration: 0.3 }}
        whileHover={!sacudiendo ? { scale: 1.05 } : {}}
        whileTap={!sacudiendo ? { scale: 0.95 } : {}}
      >
        {/* Circulo exterior (bola negra) */}
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-zinc-800 via-black to-zinc-900
                        shadow-2xl shadow-purple-500/20 border border-white/10"
        />

        {/* Circulo interior (ventana) */}
        <div
          className="absolute inset-6 sm:inset-8 rounded-full bg-gradient-to-br from-indigo-950 via-purple-950 to-indigo-950
                        border border-purple-500/30 flex items-center justify-center"
        >
          {fase === "shaking" ? (
            <span className="text-3xl animate-pulse">🔮</span>
          ) : (
            <span className="text-4xl font-black text-white select-none">
              8
            </span>
          )}
        </div>
      </motion.div>

      {/* Respuesta debajo de la bola */}
      <div className="mt-5 min-h-[80px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {fase === "shaking" && (
            <motion.p
              key="consultando"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-white/30 font-body text-sm"
            >
              Consultando al universo...
            </motion.p>
          )}
          {fase === "done" && respuesta && (
            <motion.div
              key="resultado"
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white/5 rounded-2xl p-4 border border-purple-400/20 max-w-sm"
            >
              <p className="text-white/90 font-body text-sm leading-relaxed">
                {respuesta}
              </p>
            </motion.div>
          )}
          {fase === "idle" && (
            <motion.p
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/30 font-body text-xs"
            >
              Toca la bola para preguntar
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ============ RULETA DE REGALOS ============
const regalosRuleta = [
  {
    emoji: "🍫",
    nombre: "Un chocolate",
    desc: "Pero invitame we andale",
  },
  { emoji: "🌹", nombre: "Rosa", desc: "Una rosa para otra rosa" },
  {
    emoji: "💌",
    nombre: "Carta de amor",
    desc: "Escribeme una carta, andale we, ya no me han dado",
  },
  { emoji: "🍕", nombre: "Pizza", desc: "Una rebanada de pipsha del pequeño cesar" },
  { emoji: "🎵", nombre: "Serenata", desc: "Pero tu pagas" },
  { emoji: "💍", nombre: "Anillo", desc: "Nos casamos alv" },
  { emoji: "🎮", nombre: "Noche de gaming", desc: "Sale clash?" },
  {
    emoji: "📷",
    nombre: "Foto",
    desc: "Una foto mia pa que me recuerdes siempre bb",
  },
  { emoji: "💋", nombre: "Un beso", desc: "En el siempresucio" },
  {
    emoji: "🌮",
    nombre: "Tacos",
    desc: "Te invito a desayunar en la noche",
  },
];

function RuletaRegalos() {
  const [girando, setGirando] = useState(false);
  const [resultado, setResultado] = useState<(typeof regalosRuleta)[0] | null>(
    null,
  );
  const [rotacion, setRotacion] = useState(0);

  const girar = () => {
    if (girando) return;
    setGirando(true);
    setResultado(null);

    const segmento = 360 / regalosRuleta.length;
    // Elegir ganador random
    const indiceGanador = Math.floor(Math.random() * regalosRuleta.length);
    // La flecha apunta arriba (0 grados = top). El item 0 empieza en top (-90deg en el circulo).
    // Para que el item ganador quede arriba, necesitamos rotar para que su posicion quede a 0.
    // Item i esta a angulo: i * segmento grados en la ruleta.
    // Queremos que eso quede en top, asi que rotamos -(i * segmento) + vueltas extra.
    const vueltasExtra = (Math.floor(Math.random() * 3) + 4) * 360;
    const anguloDestino = vueltasExtra - indiceGanador * segmento;

    setRotacion((prev) => {
      // Asegurar que siempre gira hacia adelante
      const base = prev - (prev % 360);
      return base + anguloDestino;
    });

    setTimeout(() => {
      setResultado(regalosRuleta[indiceGanador]);
      setGirando(false);
    }, 3500);
  };

  const segmento = 360 / regalosRuleta.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-3xl p-6 max-w-lg w-full mb-8 border-pink-500/20 text-center"
    >
      <h3 className="font-display text-lg text-white font-bold mb-2">
        🎰 Ruleta de Regalos
      </h3>
      <p className="text-white/40 font-body text-sm mb-6">
        Si nadie te va a regalar nada, te regalo lo que caiga, si o que
      </p>

      {/* Ruleta visual */}
      <div className="relative mx-auto w-60 h-60 sm:w-72 sm:h-72 mb-6">
        {/* Indicador / flecha arriba */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20 text-xl text-white drop-shadow-lg">
          ▼
        </div>

        {/* Circulo de la ruleta */}
        <motion.div
          className="w-full h-full rounded-full border-4 border-white/20 relative
                     shadow-xl shadow-purple-500/10"
          style={{
            background: `conic-gradient(${regalosRuleta
              .map((_, i) => {
                const color =
                  i % 2 === 0
                    ? "rgba(147, 51, 234, 0.35)"
                    : "rgba(219, 39, 119, 0.3)";
                const start = (i * segmento).toFixed(1);
                const end = ((i + 1) * segmento).toFixed(1);
                return `${color} ${start}deg ${end}deg`;
              })
              .join(", ")})`,
          }}
          animate={{ rotate: rotacion }}
          transition={
            girando
              ? { duration: 3.5, ease: [0.15, 0.6, 0.15, 1] }
              : { duration: 0 }
          }
        >
          {/* Emojis posicionados en circulo */}
          {regalosRuleta.map((regalo, i) => {
            // Cada emoji en el centro de su segmento
            // Angulo desde top (0 = arriba, clockwise)
            const anguloMedio = i * segmento + segmento / 2;
            // Convertir a radianes, ajustar para que 0deg = arriba
            const rad = ((anguloMedio - 90) * Math.PI) / 180;
            const radio = 40; // % desde el centro
            const x = 50 + radio * Math.cos(rad);
            const y = 50 + radio * Math.sin(rad);
            return (
              <span
                key={i}
                className="absolute text-xl sm:text-2xl"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {regalo.emoji}
              </span>
            );
          })}

          {/* Lineas divisorias */}
          {regalosRuleta.map((_, i) => {
            const angulo = i * segmento;
            return (
              <div
                key={`line-${i}`}
                className="absolute top-0 left-1/2 h-1/2 w-px bg-white/10 origin-bottom"
                style={{ transform: `rotate(${angulo}deg)` }}
              />
            );
          })}
        </motion.div>

        {/* Centro de la ruleta */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500
                        border-4 border-white/30 z-10 flex items-center justify-center
                        shadow-lg shadow-purple-500/30"
        >
          <span className="text-white font-display text-xs font-bold">
            {girando ? "..." : "GIRA"}
          </span>
        </div>
      </div>

      {/* Boton girar */}
      {!resultado && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={girar}
          disabled={girando}
          className={`px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white
                     rounded-full font-body font-semibold cursor-pointer
                     shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50
                     transition-all border border-white/10
                     ${girando ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {girando ? "Girando..." : "Girar la ruleta 🎰"}
        </motion.button>
      )}

      {/* Resultado */}
      <AnimatePresence>
        {resultado && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white/5 rounded-2xl p-5 border border-purple-400/20 mt-2"
          >
            <motion.span
              className="text-5xl block mb-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
            >
              {resultado.emoji}
            </motion.span>
            <p className="font-display text-xl text-white font-bold">
              {resultado.nombre}
            </p>
            <p className="text-white/50 font-body text-sm mt-1">
              {resultado.desc}
            </p>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={girar}
              className="mt-4 px-6 py-2.5 bg-white/10 hover:bg-white/15 text-white/70 hover:text-white
                         rounded-full font-body font-medium text-sm cursor-pointer
                         transition-colors border border-white/10"
            >
              Girar otra vez 🔄
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function VistaSoltero({ onBack }: { onBack: () => void }) {
  const [fase, setFase] = useState<"regalo" | "rosa" | "contenido">("regalo");
  const [afirmacionIndex, setAfirmacionIndex] = useState(0);
  const [showSparkles, setShowSparkles] = useState(false);

  const recibirRosa = () => {
    setFase("rosa");
    setShowSparkles(true);
    setTimeout(() => setShowSparkles(false), 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAfirmacionIndex((prev) => (prev + 1) % afirmaciones.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.6 }}
      className="min-h-dvh flex flex-col items-center px-5 py-8 relative z-10"
    >
      {/* Sparkle effect */}
      <AnimatePresence>
        {showSparkles && (
          <>
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.span
                key={`sparkle-${i}`}
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: 0,
                  y: 0,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  x: (Math.random() - 0.5) * 300,
                  y: (Math.random() - 0.5) * 300,
                }}
                transition={{ duration: 1.5, delay: Math.random() * 0.5 }}
                className="fixed top-1/2 left-1/2 text-2xl pointer-events-none z-50"
              >
                {["✨", "🌟", "💖", "🌹", "💫"][i % 5]}
              </motion.span>
            ))}
          </>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {/* FASE 1: Boton para reclamar regalo */}
        {fase === "regalo" && (
          <motion.div
            key="regalo"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex flex-col items-center justify-center text-center"
          >
            <motion.span
              className="text-7xl inline-block mb-8"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎁
            </motion.span>
            <h2 className="font-display text-3xl sm:text-4xl text-white font-bold mb-4">
              Hay algo especial esperandote <br /> bb...
            </h2>
            <p className="text-white/50 font-body text-base mb-8">
              Porque tu si te lo mereces
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={recibirRosa}
              className="px-10 py-4 bg-gradient-to-r from-rosa-fuerte to-purple-600 text-white
                         rounded-2xl font-body font-semibold text-lg cursor-pointer
                         shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50
                         transition-shadow border border-white/10"
            >
              Recibir mi regalo 🌹
            </motion.button>
          </motion.div>
        )}

        {/* FASE 2: Rosa recibida */}
        {fase === "rosa" && (
          <motion.div
            key="rosa"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex flex-col items-center justify-center text-center px-4"
          >
            <motion.span
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="text-8xl sm:text-9xl block mb-6 pulse-glow"
            >
              🌹
            </motion.span>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white font-display text-2xl sm:text-3xl italic mb-2"
            >
              Esta rosa es para ti
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-white/50 font-body text-base mb-2"
            >
              Porque te la mereces, precios@
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10 mb-8"
            >
              <p className="text-dorado font-body text-sm">
                🏷️ Valor: Ilimitado
                <br />
                💛 Precio: Nada comparado a ti
              </p>
            </motion.div>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFase("contenido")}
              className="px-8 py-3 glass-card rounded-2xl text-white font-body
                         font-medium cursor-pointer border-white/20 hover:border-white/40
                         transition-colors text-center"
            >
              Continuar ✨
            </motion.button>
          </motion.div>
        )}

        {/* FASE 3: Contenido completo */}
        {fase === "contenido" && (
          <motion.div
            key="contenido"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center w-full"
          >
            {/* Header */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-6"
            >
              <motion.span
                className="text-6xl inline-block"
                animate={{ rotate: [0, 10, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                👑
              </motion.span>
              <h1 className="font-display text-4xl sm:text-5xl font-black text-white mt-4">
                <span className="gradient-text">Que paso rey/na</span> cabeza
                alta porque se te cae la corona
              </h1>
              <p className="text-white/50 font-body mt-2 text-base">
                Asi andamos mejor la neta
              </p>
            </motion.div>

            {/* Afirmacion rotativa */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="w-full max-w-lg mb-6"
            >
              <div className="glass-card rounded-2xl p-4 border-purple-500/20 text-center">
                <span className="text-white/40 text-xs font-body uppercase tracking-widest">
                  Frases del día
                </span>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={afirmacionIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="text-dorado font-display text-lg italic mt-2"
                  >
                    "{afirmaciones[afirmacionIndex]}"
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Ruleta de Regalos */}
            <RuletaRegalos />

            {/* Bola 8 del Amor */}
            <Bola8Amor />

            {/* Despedida */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="text-center mb-8"
            >
              <p className="text-white/50 font-body text-base mb-2">
                No lo olvides miamor:
              </p>
              <p className="text-2xl sm:text-3xl font-display font-bold gradient-text leading-snug">
                Lo mas importante eres tu <br />
                Cuidate mucho, vete por la sombrita 💖
              </p>
              <p className="text-white/30 font-body text-sm mt-3">XOXOXOXOXO</p>
            </motion.div>

            {/* Back button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBack}
              className="px-8 py-3 rounded-full glass-card text-white/60 hover:text-white
                         font-body text-sm transition-colors cursor-pointer border-white/10
                         hover:border-white/30 mb-10"
            >
              ← Cambiar mi respuesta (si la neta si tengo pareja)
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ============ COMPONENTE PRINCIPAL ============
export default function ValentinesApp() {
  const [estado, setEstado] = useState<"inicio" | "soltero" | "pareja">(
    "inicio",
  );
  const [heartsPaused, setHeartsPaused] = useState(false);

  const handleEstado = (nuevoEstado: "inicio" | "soltero" | "pareja") => {
    setEstado(nuevoEstado);
    setHeartsPaused(nuevoEstado === "pareja");
  };

  const bgClass =
    estado === "soltero"
      ? "bg-soltero"
      : estado === "pareja"
        ? "bg-pareja"
        : "bg-inicio";

  return (
    <div
      className={`${bgClass} min-h-dvh transition-all duration-1000 noise-overlay relative`}
    >
      <FloatingHearts variant={estado} paused={heartsPaused} />

      <AnimatePresence mode="wait">
        {estado === "inicio" && (
          <PantallaInicio key="inicio" onSelect={handleEstado} />
        )}
        {estado === "soltero" && (
          <VistaSoltero key="soltero" onBack={() => handleEstado("inicio")} />
        )}
        {estado === "pareja" && (
          <VistaPareja
            key="pareja"
            onBack={() => handleEstado("inicio")}
            onFaseChange={(fase) => setHeartsPaused(fase !== "contenido")}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
