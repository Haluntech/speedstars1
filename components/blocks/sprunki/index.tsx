"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Icon from "@/components/icon";

interface GameProps {
  gameType?: string;
}

export default function GameComponent({ gameType }: GameProps) {
  const t = useTranslations();

  return (
    <Card className="p-6">
      <div className="mb-4">
        <iframe
          src={gameType === 'puzzle' 
            ? "https://sprunki1.eratogame.com" 
            : "https://sprunki1.eratogame.com"}
          className="mx-auto max-w-4xl w-full aspect-video rounded-lg"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </Card>
  );
}