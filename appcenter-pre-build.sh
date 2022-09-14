#!/usr/bin/env bash

# We need to check the type of build we are starting
if [ -z "$APP_ENV" ]
then
  echo "APP_ENV is not set"
  exit
fi

# If we are not in storybook mode we should remove all storybook modules
if [ -z "$STORYBOOK" ]
then
  echo "Removing storybook mentions"
  echo "Removing storybook folder"
  rm -rf storybook/
  echo "Removing storybook dependencies in package.json"
  sed -i '/@storybook/d' package.json
  echo "Removing all stories"
  find . -name '*.story.tsx' -type f -delete
  echo "Removing storybook launcher in src/App.tsx"
  sed -i '/\/\/ \@\@SECTION STORYBOOK/,/\/\/ \@\@ENDSECTION STORYBOOK/{//!d}' src/App.tsx
fi

# If we are in prod mode we should remove all debug modules
if [ "$APP_ENV" = "prd" ]
then
  echo "Removing debug modules"
  # TO DO: Remove debug modules
  echo "Removing debug folder"
  rm -rf debug/
  echo "Removing debug navigator"
  sed -i '/import DebugNavigator/d' src/navigation/BaseNavigator.tsx
  sed -i '/{debugScreens}/d' src/navigation/BaseNavigator.tsx
  sed -i '/\/\/ \@\@SECTION DEBUG/,/\/\/ \@\@ENDSECTION DEBUG/{//!d}' src/navigation/BaseNavigator.tsx
  sed -i '/import { NetworkRequest/d' src/navigation/index.ts
  sed -i '/\/\/ \@\@SECTION DEBUG/,/\/\/ \@\@ENDSECTION DEBUG/{//!d}' src/navigation/index.ts
  echo "Removing debug loader"
  sed -i '/import DebugLoader/d' src/App.tsx
  sed -i '/<DebugLoader \/>/d' src/App.tsx
  rm -rf src/components/debugLoader
  echo "Removing debug launcher in src/App.tsx"
  sed -i '/\/\/ \@\@SECTION DEBUG/,/\/\/ \@\@ENDSECTION DEBUG/{//!d}' src/App.tsx
fi
