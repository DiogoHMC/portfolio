# Portfolio Moderno - Diogo Correia

Portfólio profissional desenvolvido em React TypeScript com design responsivo e moderno.

## ✨ Características

- ✅ **Mobile-first**: Otimizado para dispositivos móveis (>90% dos acessos)
- ✅ **Totalmente responsivo**: Funciona perfeitamente em todos os tamanhos de tela
- ✅ **Navegação intuitiva**: Menu fixo com navegação suave entre seções
- ✅ **Design moderno**: Preto e branco clean e profissional
- ✅ **Hierarquia clara**: Informações organizadas por relevância
- ✅ **Performance**: Carregamento rápido e otimizado
- ✅ **Acessível**: Seguindo boas práticas de acessibilidade

## 🎨 Personalização de Cores e Estilo

### Onde Personalizar o Tema

Abra o arquivo `Portfolio.css` e vá até o topo onde estão as **variáveis CSS**:

```css
:root {
  /* CORES PRINCIPAIS - Altere aqui para mudar o tema */
  --color-primary: #000000;        /* Cor principal (preto) */
  --color-secondary: #ffffff;      /* Cor secundária (branco) */
  --color-accent: #333333;         /* Cor de destaque (cinza escuro) */
  
  /* CORES DE TEXTO */
  --color-text-primary: #000000;   /* Texto principal */
  --color-text-secondary: #666666; /* Texto secundário */
  --color-text-muted: #999999;     /* Texto suave */
  --color-text-inverse: #ffffff;   /* Texto em fundo escuro */
  
  /* ... */
}
```

### Exemplos de Temas Alternativos

#### Tema Azul Profissional
```css
--color-primary: #2563eb;        /* Azul */
--color-accent: #1e40af;         /* Azul escuro */
```

#### Tema Verde Moderno
```css
--color-primary: #059669;        /* Verde */
--color-accent: #047857;         /* Verde escuro */
```

#### Tema Roxo Criativo
```css
--color-primary: #7c3aed;        /* Roxo */
--color-accent: #6d28d9;         /* Roxo escuro */
```

### Alterar Logo / Marca

No arquivo `Portfolio.tsx`, procure por `PERSONALIZE AQUI`:

```tsx
<div className="logo-placeholder">DC</div>
```

Substitua `DC` pelo texto que desejar ou adicione uma imagem:

```tsx
<img src="/path/to/logo.png" alt="Logo" />
```

### Adicionar Suas Fotos

Procure por `PERSONALIZE AQUI` no código e substitua os placeholders:

```tsx
{/* Hero Avatar */}
<div className="avatar-placeholder"></div>
```

Por:

```tsx
<img src="/path/to/your-photo.jpg" alt="Diogo Correia" />
```

## 📝 Conteúdo para Personalizar

### 1. Informações Pessoais

No arquivo `Portfolio.tsx`, altere:

```tsx
<h1>Diogo Correia</h1>
<p className="hero-subtitle">Software engineer, Back End & Web application developer</p>
```

### 2. Projetos

Edite o array `projects`:

```tsx
const projects: Project[] = [
  {
    id: '1',
    title: 'Seu Projeto',
    description: 'Descrição do projeto',
    technologies: ['Go', 'PostgreSQL', 'Docker'],
    imageUrl: '/caminho/para/imagem.jpg',
    githubUrl: 'https://github.com/seu-usuario/projeto',
    liveUrl: 'https://projeto-live.com',
    featured: true
  }
];
```

### 3. Experiências

Edite o array `experiences`:

```tsx
const experiences: Experience[] = [
  {
    id: '1',
    company: 'Nome da Empresa',
    role: 'Seu Cargo',
    period: 'Present',
    description: 'Descrição do que você faz/fez',
    technologies: ['Go', 'Docker', 'PostgreSQL'],
    current: true
  }
];
```

### 4. Links Sociais

No final do arquivo, na seção de contato, altere os links:

```tsx
<a href="https://github.com/seu-usuario">Github</a>
<a href="https://linkedin.com/in/seu-perfil">LinkedIn</a>
<a href="mailto:seu-email@exemplo.com">Email</a>
```

## 🚀 Como Usar

### Instalação

```bash
# Clone o repositório ou copie os arquivos

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
npm start
```

Abre [http://localhost:3000](http://localhost:3000) no navegador.

### Build para Produção

```bash
npm run build
```

Cria a pasta `build` com os arquivos otimizados.

## 📱 Responsividade

O portfólio é 100% responsivo e adapta-se automaticamente a:

- **Mobile**: < 768px (menu hamburguer, layout em coluna única)
- **Tablet**: 768px - 1024px (layout híbrido)
- **Desktop**: > 1024px (layout completo em grade)

## 📋 Estrutura de Seções

1. **Home/Hero**: Apresentação principal com CTA
2. **Projects**: Grid de projetos destacados
3. **Experience**: Timeline de experiências profissionais
4. **About**: Informações detalhadas e habilidades
5. **Contact**: Links para redes sociais e contato
6. **Footer**: Informações adicionais e links

## 🎯 Melhorias Implementadas (Feedback do Professor)

✅ **1. Jornada do usuário**: Menu fixo com navegação clara e intuitiva
✅ **2. Arquitetura**: Hierarquia visual baseada em relevância
✅ **3. Responsividade**: Mobile-first, testado em todos os dispositivos
✅ **4. Organização visual**: Sem competição entre elementos
✅ **5. Seção About**: Organizada com habilidades categorizadas
✅ **6. Wireframe evoluído**: Design de alto nível e profissional
✅ **7. Rodapé**: Completo com links e copyright

## 🛠️ Tecnologias

- React 18
- TypeScript
- CSS3 (Variables, Grid, Flexbox)
- Responsive Design
- Semantic HTML


---

**Desenvolvido por Diogo Correia** 🚀