import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Sword, Shield, Zap } from "lucide-react";

const champions = [
  { name: "Viktor", image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viktor_0.jpg" },
  { name: "Jinx", image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg" },
  { name: "Yasuo", image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" },
];

const Index = () => {
  const [currentChampion, setCurrentChampion] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentChampion((prev) => (prev + 1) % champions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-900 text-white overflow-hidden relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <motion.img
          key={currentChampion}
          src={champions[currentChampion].image}
          alt={champions[currentChampion].name}
          className="w-full h-full object-cover opacity-50"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5 }}
        />
      </motion.div>

      <motion.h1
        className="text-6xl font-bold mb-8 z-10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Viktor Vatn
      </motion.h1>

      <motion.h2
        className="text-3xl mb-12 z-10"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
      >
        League of Legends Enthusiast
      </motion.h2>

      <div className="flex space-x-4 z-10">
        <Button variant="outline" size="lg" className="group text-white">
          <Sword className="mr-2 h-4 w-4 group-hover:animate-bounce" />
          Play Now
        </Button>
        <Button variant="outline" size="lg" className="group text-white">
          <Shield className="mr-2 h-4 w-4 group-hover:animate-pulse" />
          Champions
        </Button>
        <Button variant="outline" size="lg" className="group text-white">
          <Zap className="mr-2 h-4 w-4 group-hover:animate-spin" />
          Abilities
        </Button>
      </div>

      <motion.div
        className="mt-16 text-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-xl mb-4">Featured Champion</p>
        <motion.h3
          key={currentChampion}
          className="text-4xl font-bold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          {champions[currentChampion].name}
        </motion.h3>
      </motion.div>
    </div>
  );
};

export default Index;
