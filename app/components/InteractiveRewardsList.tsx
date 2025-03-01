"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

interface Reward {
  id: number;
  title: string;
  description: string;
  cost: number;
  src: string;
}

interface InteractiveRewardsListProps {
  rewards: Reward[];
  userPoints: number;
}

export default function InteractiveRewardsList({ rewards, userPoints }: InteractiveRewardsListProps) {
  const [selectedReward, setSelectedReward] = useState<Reward | null>(null);
  const [showClaimModal, setShowClaimModal] = useState(false);
  const [showCongratsModal, setShowCongratsModal] = useState(false);

  // Open the claim modal for a reward
  const openClaimModal = (reward: Reward) => {
    setSelectedReward(reward);
    setShowClaimModal(true);
  };

  const closeClaimModal = () => {
    setShowClaimModal(false);
  };

  // Simulate claiming the reward
  const claimReward = () => {
    setShowClaimModal(false);
    setShowCongratsModal(true);
  };

  const closeCongratsModal = () => {
    setShowCongratsModal(false);
    setSelectedReward(null);
  };

  // Track window size for confetti
  const [windowSize, setWindowSize] = useState({ width: 300, height: 300 });
  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {/* Rewards List */}
      <div>
        {rewards.map((reward, idx) => (
          <div key={reward.id} className="cursor-pointer" onClick={() => openClaimModal(reward)}>
            <div className="flex items-center py-3">
              {/* Image with Cost Overlay */}
              <div className="relative w-[80px] h-[80px] mr-3">
                <Image
                  src={reward.src}
                  alt={reward.title}
                  fill
                  className="rounded-md object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-xs p-1 flex items-center justify-center">
                  <span className="mr-1 text-[#80F8FE]">{reward.cost}</span>
                  <FaStar className="text-[#80F8FE]" />
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex-1">
                <h3 className="font-semibold">{reward.title}</h3>
                <p className="text-sm text-gray-700">{reward.description}</p>
              </div>
            </div>
            {/* Horizontal rule between cards */}
            {idx < rewards.length - 1 && <hr className="border-gray-200" />}
          </div>
        ))}
      </div>

      {/* Claim Modal */}
      <AnimatePresence>
        {showClaimModal && selectedReward && (
          <motion.div 
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-6 w-full max-w-sm"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <h3 className="text-lg font-semibold mb-4">{selectedReward.title}</h3>
              <p className="mb-4 text-sm">{selectedReward.description}</p>
              <button
                onClick={claimReward}
                className="w-full bg-[#1A2D47] text-white py-2 rounded mb-2"
              >
                Reclamar Oferta
              </button>
              <button
                onClick={closeClaimModal}
                className="w-full border border-gray-300 py-2 rounded"
              >
                Cancelar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Congratulations Modal */}
      <AnimatePresence>
        {showCongratsModal && (
          <motion.div 
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-6 w-full max-w-sm text-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <h3 className="text-lg font-semibold mb-4">¡Felicidades!</h3>
              <p className="mb-4 text-sm">Has reclamado la oferta. Revisa tu bandeja de entrada.</p>
              <button
                onClick={closeCongratsModal}
                className="w-full bg-[#1A2D47] text-white py-2 rounded"
              >
                Cerrar
              </button>
              {/* Confetti effect */}
              <Confetti
                width={windowSize.width}
                height={windowSize.height}
                recycle={false}
                numberOfPieces={200}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
