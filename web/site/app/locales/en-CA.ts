export default {
  btn: {
    getStarted: 'Get Started',
    goHome: 'Go Home',
    goBack: 'Go Back',
    downloadSpec: 'Download the Specification',
    allProducts: 'View Products',
    products: 'Products',
    dashboard: 'Dashboard',
    sbcConnect: 'Service BC Connect',
    apiDoc: 'API documentation',
    createKey: 'Create Key',
    revoke: 'Revoke',
    copy: 'Copy',
    copied: 'Copied!',
    copyCode: 'Copy Code Snippet',
    submit: 'Submit',
    next: 'Next',
    previous: 'Previous',
    openMainNav: 'Open Main Navigation Menu',
    closeMainNav: 'Close Main Navigation Menu',
    prevpage: 'Previous Topic',
    nextpage: 'Next Topic'
  },
  label: {
    getStarted: 'Get Started',
    allProducts: 'All Products'
  },
  text: {
    getStarted: 'Start to set up Service BC Connect APIs in your applications.',
    allProducts: 'Learn about and try Service BC Connect products.'
  },
  sbcBreadcrumb: {
    default: 'BC Registries and Online Services',
    backBtn: 'Go Back',
    arialabel: 'Breadcrumb',
    sbcHome: 'Service BC Connect',
    sbcProductslist: 'Products List',
    sbcProducts: 'Products'
  },
  page: {
    notFound: {
      h1: 'Page Not Found'
    },
    home: {
      title: 'Home',
      h1: 'Service BC Connect Developer Site',
      intro: 'Welcome to the Service BC Connect Developer Site! Access API information for all BC Registries services here.'
    },
    products: {
      title: 'All Products',
      h1: 'All Products'
    },
    dashboard: {
      title: 'Dashboard',
      description: 'Manage account information and view account activity', // Gérer les informations du compte et afficher l'activité du compte
      sandboxMode: {
        infoText: 'Sandbox Mode is enabled. Do not use for production.',
        btnActive: 'Disable Sandbox Mode',
        btnInactive: 'Enable Sandbox Mode',
        text: 'Sandbox Mode'
      },
      tabs: {
        profile: 'Profile',
        apiKeys: 'API Keys' // Clés API
      }
    }
  },
  SbcHeader: {
    title: 'Service BC Connect',
    logoBtnLabel: 'Home', // <img> link aria-label
    navLabel: 'Main Navigation' // <nav> aria-label
  },
  SbcFooter: {
    navLabel: 'Useful Links', // <nav> aria-label
    home: 'Home',
    releaseNotes: 'Release Notes',
    disclaimer: 'Disclaimer',
    privacy: 'Privacy',
    hours: 'Hours of Availability',
    ally: 'Accessibility',
    copyright: 'Copyright',
    bcApp: 'A BC Online Application'
  },
  SbcLogo: {
    alt: 'Government of British Columbia Logo' // <img> alt
  },
  ColorModeSelect: {
    // aria-labels
    light: 'Switch to dark mode',
    dark: 'Switch to light mode'
  },
  LocaleSelect: {
    // aria-label
    label: 'Select a Language, current language: English'
  },
  SbcMainCard: {
    learnMore: 'Learn More'
  },
  SbcProductCard: {
    goTo: 'Go to'
  },
  SbcNavigation: {
    intro: 'Introduction',
    devproducts: 'Developer Products'
  },
  SbcDashboardTableApiKeys: {
    title: 'Developer Access',
    description: {
      main: 'Enabling developer access would allow you to integrate the BC Registries API services to your system.',
      sec: 'Learn more in the'
    },
    cols: {
      name: 'Name',
      env: 'Environment',
      apiKey: 'API Key',
      actions: 'Actions'
    }
  },
  modal: {
    createKey: {
      title: 'Create Key',
      content: 'A name is required to create a new key. Please enter a unique name below.',
      formLabel: 'Name'
    },
    revokeKey: {
      title: 'Revoke Key - {key}',
      content: 'Are you sure you want to revoke this API key? This will permanently remove access to the key, current projects using this key may be affected.',
      formLabel: "Enter '{key}' to confirm."
    }
  }
}
