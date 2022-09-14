module.exports = function (plop) {
  plop.setHelper('spaceCase', (text) => {
    const upperCaseName = text.charAt(0)
      .toUpperCase() + text.slice(1)
    return upperCaseName.split(/(?=[A-Z])/)
      .join(' ')
  })
  plop.setGenerator('component', {
    description: 'generates react native components',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'What is the name of your component?',
    }],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{name}}/{{properCase name}}.tsx',
        templateFile: 'plop-templates/component.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/styles.ts',
        templateFile: 'plop-templates/styles.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/index.ts',
        templateFile: 'plop-templates/index.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{properCase name}}.story.tsx',
        templateFile: 'plop-templates/componentStory.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{properCase name}}.test.tsx',
        templateFile: 'plop-templates/componentTest.hbs',
      },
    ],
  })
  plop.setGenerator('screen', {
    description: 'generates react native screens',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'What is the name of your screen?',
    }],
    actions: [
      {
        type: 'add',
        path: 'src/screens/{{name}}/{{properCase name}}.tsx',
        templateFile: 'plop-templates/screen.hbs',
      },
      {
        type: 'add',
        path: 'src/screens/{{name}}/styles.ts',
        templateFile: 'plop-templates/styles.hbs',
      },
      {
        type: 'add',
        path: 'src/screens/{{name}}/index.ts',
        templateFile: 'plop-templates/index.hbs',
      },
      {
        type: 'add',
        path: 'src/screens/{{name}}/{{properCase name}}.story.tsx',
        templateFile: 'plop-templates/screenStory.hbs',
      },
      {
        type: 'append',
        path: 'src/localization/en.ts',
        pattern: /(?=\n}\n\nexport type)/,
        template: '  {{name}}: {\n'
          + '    __name: \'{{name}}\',\n'
          + '  },',
      },
      {
        type: 'append',
        path: 'src/localization/es.ts',
        pattern: /(?=\n}\n\nexport default)/,
        template: '  {{name}}: {\n'
          + '    __name: \'\',\n'
          + '  },',
      },
      {
        type: 'append',
        path: 'src/navigation/index.ts',
        pattern: /(?=\n\s+\/\/ ROOTS APPEND)/,
        template: '  {{properCase name}} = \'{{properCase name}}\',',
      },
      {
        type: 'append',
        path: 'src/navigation/BaseNavigator.tsx',
        pattern: /(?=\n\nconst Stack)/,
        template: 'import {{properCase name}} from \'@/screens/{{name}}\'',
      },
      {
        type: 'append',
        path: 'src/navigation/BaseNavigator.tsx',
        pattern: /(?=\n\s+<\/Stack.Navigator>)/,
        template: '      <Stack.Screen\n'
          + '        name={Roots.{{properCase name~}} }\n'
          + '        component={ {{~properCase name~}} }\n'
          + '        options={headerOptions(() => null, true)}\n'
          + '      />',
      },
      {
        type: 'append',
        path: 'src/types.ts',
        pattern: /,(?=\n}\n)/,
        template: '  {{properCase name}}: Record<string, unknown>,',
      },
    ],
  })
}
