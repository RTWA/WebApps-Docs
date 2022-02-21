module.exports = {
  docs: [
    'introduction',
    'system-requirements',
    {
      Installation: [
        {
          'Server Configuration': [
            'installation/server-configuration/linux-macos',
            'installation/server-configuration/windows-iis',
            'installation/server-configuration/windows-wamp',
            // 'installation/server-configuration/windows-xampp',
          ]
        },
        'installation/index',
        'installation/updating',
      ]
    },
    {
      Configuration: [
        'configuration/application-settings',
        'configuration/email-settings',
        'configuration/authentication-options',
        'configuration/permissions',
        'configuration/users-groups',
        'configuration/apps-plugins',
        {
          'Microsoft Azure Integration': [
            'configuration/azure-integration-setup',
            'configuration/azure-integration',
          ],
        },
        'configuration/config-editor',
      ]
    },
    {
      Blocks: [
        'blocks/creating-blocks',
      ]
    },
    {
      Apps: [
        'apps/index',
      ]
    },
    {
      type: 'link',
      label: 'Developer Information',
      href: '/developers/introduction',
    }
  ],
  developers: [
    'developers/introduction',
    'developers/directory-structure',
    'developers/developer-commands',
    'developers/sample-data',
    {
      "React Components": [
        'developers/react-components/index',
        'developers/react-components/auth-context',
        'developers/react-components/webapps-context',
        {
          "Components": [
            'developers/react-components/components/badge',
            'developers/react-components/components/banner',
            'developers/react-components/components/button',
            'developers/react-components/components/confirm-delete-button',
            'developers/react-components/components/confirm-delete-modal',
            'developers/react-components/components/dropdown-button',
            'developers/react-components/components/icon',
            'developers/react-components/components/infinite-scroll',
            'developers/react-components/components/input',
            'developers/react-components/components/link',
            'developers/react-components/components/loader',
            'developers/react-components/components/switch',
            'developers/react-components/components/toasts',
            'developers/react-components/components/undocumented',
          ]
        }
      ]
    },
    {
      "Plugin Development": [
        'developers/plugin-development/index',
        'developers/plugin-development/manifest-file',
        'developers/plugin-development/class-file',
        'developers/plugin-development/css-include',
        'developers/plugin-development/html-include',
        'developers/plugin-development/scripts-include',
        'developers/plugin-development/available-fields',
      ]
    },
    {
      "App Development": [
        'developers/app-development/index',
        'developers/app-development/manifest-file',
        'developers/app-development/service-provider',
        {
          "Controllers": [
            'developers/app-development/controllers/app-manager-controller',
            'developers/app-development/controllers/master-controller',
            'developers/app-development/controllers/other-controllers'
          ]
        },
        'developers/app-development/models',
        'developers/app-development/routes',
        'developers/app-development/extending',
        'developers/app-development/submit',
      ]
    },
  ]
};
