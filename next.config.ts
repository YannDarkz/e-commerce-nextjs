import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: "1mb", // Define um limite de tamanho para requisições
      allowedOrigins: ["*"], // Permite requisições de qualquer origem (ajuste conforme necessário)
    },
  },
  images: {
    domains: ['files.stripe.com'],
  },
  env: {
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY, // Garante que a variável está sendo carregada
  },
};

export default nextConfig;
