import type { ComponentType } from "react";
import LandingVendasPreview from "@/components/previews/LandingVendasPreview";
import LojaVirtualPreview from "@/components/previews/LojaVirtualPreview";
import InstitucionalPreview from "@/components/previews/InstitucionalPreview";
import PortfolioPreview from "@/components/previews/PortfolioPreview";
import RestaurantePreview from "@/components/previews/RestaurantePreview";
import ImobiliariaPreview from "@/components/previews/ImobiliariaPreview";

export const previewsBySlug: Record<string, ComponentType> = {
  "landing-vendas": LandingVendasPreview,
  "loja-virtual": LojaVirtualPreview,
  "site-institucional": InstitucionalPreview,
  portfolio: PortfolioPreview,
  restaurante: RestaurantePreview,
  imobiliaria: ImobiliariaPreview,
};
