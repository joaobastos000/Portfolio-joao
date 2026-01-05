import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        brand: 'Portfolio',
        home: 'Home',
        about: 'About',
        work: 'Work',
        contact: 'Contact'
      },
      hero: {
        greet: "Hi I'm João (John)",
        subtitle: 'A Developer from Brazil',
        dedication: 'Dedicated to coding',
        words: ['Robust', 'Modern', 'Scalable', 'Reliable'],
        solutions: 'Full Stack Solutions'
      },
      about: {
        heading: 'About Me',
        intro_head: "Hi, I'm João Bastos",
        intro_p1: 'Over the last 4 years, I developed my frontend and backend dev skills to deliver dynamic and software and web applications.',
        intro_p2: 'I have two years of experience as a full stack developer, building and maintaining web applications using .NET, C#, Vue, React, Angular, and other modern technologies.',
        intro_p3: "I'm currently expanding my skills in Artificial Intelligence, studying and applying concepts related to Retrieval-Augmented Generation (RAG) and Large Language Models (LLMs).",
        timezone_head: 'Time Zone',
        timezone_text: "I'm based in Brazil, and open to remote work worldwide",
        contact_head: 'Want to get in touch?',
        or: 'Or',
        tech_head: 'Tech Stack',
        tech_text: 'Since 2019, I specialized in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications'
      },
      testimonial: {
        how: 'How I Work',
        process: 'My Development Process'
      },
      projects: {
        heading: 'Case Studies'
      },
      timeline: {
        heading: 'My Work Experience'
      },
      footer: {
        terms: 'Terms & Conditions',
        privacy: 'Privacy Policy',
        copy: '© 2025 Ali. All rights reserved.'
      },
      project: {
        readMore: 'Read More',
        viewProject: 'View Project'
      },
      copy: {
        emailCopied: 'Email has Copied',
        copyEmail: 'Copy Email Address',
        whatsapp: 'WhatsApp',
        linkedin: 'LinkedIN'
      },
      alert: {
        failed: 'Failed',
        success: 'Success'
      },
      loader: {
        loaded: '{{progress}}% Loaded'
      },
      contact: {
        title: "Let's Talk",
        desc: "Whether you're loking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help",
        fullName: 'Full Name',
        email: 'Email',
        message: 'Message',
        namePlaceholder: 'John Doe',
        emailPlaceholder: 'JohnDoe@email.com',
        messagePlaceholder: 'Share your thoughts...',
        send: 'Send',
        sending: 'Sending...',
        alertSuccess: 'Your message has been sent!',
        alertError: 'Something went wrong!'
      }
    }
  },
  'pt-BR': {
    translation: {
      nav: {
        brand: 'Portfólio',
        home: 'Início',
        about: 'Sobre',
        work: 'Trabalho',
        contact: 'Contato'
      },
      hero: {
        greet: 'Olá, me chamo João',
        subtitle: 'Um desenvolvedor',
        dedication: 'Dedicado à programação',
        words: ['Robusta', 'Moderna', 'Escalável', 'Confiável'],
        solutions: 'Soluções Full Stack'
      },
      about: {
        heading: 'Sobre Mim',
        intro_head: 'Olá, eu sou João Bastos',
        intro_p1: 'Nos últimos 4 anos desenvolvi minhas habilidades front-end e back-end para entregar aplicações web dinâmicas e de software.',
        intro_p2: 'Tenho dois anos de experiência como desenvolvedor full stack, construindo e mantendo aplicações web usando .NET, C#, Vue, React, Angular e outras tecnologias modernas.',
        intro_p3: 'Atualmente estou expandindo minhas habilidades em Inteligência Artificial, estudando e aplicando conceitos relacionados a Retrieval-Augmented Generation (RAG) e Large Language Models (LLMs).',
        timezone_head: 'Fuso Horário',
        timezone_text: 'Moro no Brasil e estou disponível a trabalho remoto mundialmente',
        contact_head: 'Quer entrar em contato?',
        or: 'Ou',
        tech_head: 'Stack Tecnológico',
        tech_text: 'Desde 2019, me especializei em várias linguagens, frameworks e ferramentas que me permitem construir aplicações robustas e escaláveis'
      },
      testimonial: {
        how: 'Como eu trabalho',
        process: 'Meu Processo de Desenvolvimento'
      },
      projects: {
        heading: 'Estudos de Caso'
      },
      timeline: {
        heading: 'Minha Experiência Profissional'
      },
      footer: {
        terms: 'Termos e Condições',
        privacy: 'Política de Privacidade',
        copy: '© 2025 Ali. Todos os direitos reservados.'
      },
      project: {
        readMore: 'Leia Mais',
        viewProject: 'Ver Projeto'
      },
      copy: {
        emailCopied: 'E-mail copiado',
        copyEmail: 'Copiar endereço de e-mail',
        whatsapp: 'WhatsApp',
        linkedin: 'LinkedIN'
      },
      alert: {
        failed: 'Falha',
        success: 'Sucesso'
      },
      loader: {
        loaded: '{{progress}}% Carregado'
      },
      contact: {
        title: 'Vamos conversar',
        desc: 'Se você deseja construir um novo site, melhorar sua plataforma existente ou dar vida a um projeto único, estou aqui para ajudar',
        fullName: 'Nome Completo',
        email: 'Email',
        message: 'Mensagem',
        namePlaceholder: 'João da Silva',
        emailPlaceholder: 'joaodasilva@email.com',
        messagePlaceholder: 'Compartilhe suas ideias...',
        send: 'Enviar',
        sending: 'Enviando...',
        alertSuccess: 'Sua mensagem foi enviada!',
        alertError: 'Algo deu errado!'
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt-BR',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
