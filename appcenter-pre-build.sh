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
fi
