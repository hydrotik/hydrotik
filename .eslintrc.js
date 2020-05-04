module.exports = {
    "root": true,
    "parser": "@typescript-eslint/parser",
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:jsx-a11y/recommended",
        "plugin:react-hooks/recommended",
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "rules": {
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 0,
        "indent": [2, "tab"],
        "no-tabs": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],
        "react/jsx-props-no-spreading": 0,
        "react/jsx-indent": [2, 'tab'],
        "import/no-unresolved": 0,
        "import/extensions": 0,
        "react/jsx-indent-props": 0,
        "react/button-has-type": 0
    },
    "globals": {
        
    }
};



/*
{
  "root": true,
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "airbnb"
  ],
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "plugins": [],
    "rules": {
    "react/react-in-jsx-scope": "off"
  }
}




{
  "env": {
    "browser": true,
    "es6": true
  },
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  }
}
*/