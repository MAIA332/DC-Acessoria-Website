import React from 'react';
import Link from "next/link";

export default function PolicyPrivacy() {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
      <h1 className="text-3xl font-bold mb-4">Política de Privacidade</h1>
      <p className="mb-4">Última atualização: 02 de abril de 2025</p>
      
      <p className="mb-4">
        Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações ao utilizar nosso serviço.
      </p>
      
      <h2 className="text-xl font-semibold mt-6">1. Coleta de Informações</h2>
      <p className="mb-4">Podemos coletar informações pessoais, como nome, e-mail e dados de navegação, quando você interage com nossa plataforma.</p>
      
      <h2 className="text-xl font-semibold mt-6">2. Uso das Informações</h2>
      <p className="mb-4">Utilizamos suas informações para melhorar nossos serviços, fornecer suporte e personalizar sua experiência.</p>
      
      <h2 className="text-xl font-semibold mt-6">3. Compartilhamento de Informações</h2>
      <p className="mb-4">Não compartilhamos suas informações pessoais com terceiros, exceto quando exigido por lei ou com seu consentimento.</p>
      
      <h2 className="text-xl font-semibold mt-6">4. Segurança</h2>
      <p className="mb-4">Adotamos medidas de segurança para proteger seus dados contra acessos não autorizados.</p>
      
      <h2 className="text-xl font-semibold mt-6">5. Seus Direitos</h2>
      <p className="mb-4">Você pode solicitar a exclusão ou modificação de seus dados a qualquer momento.</p>
      
      <h2 className="text-xl font-semibold mt-6">6. Contato</h2>
      <p className="mb-4">Se tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco em <Link href="/#contato" className="text-blue-600 underline">nossa página de contato</Link>.</p>
      
      <p className="mt-6">Esta política pode ser atualizada periodicamente. Recomendamos que você a revise regularmente.</p>
    </div>
  );
}
