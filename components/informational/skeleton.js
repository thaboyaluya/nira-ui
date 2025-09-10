module.exports = Skeleton = (styles) => ({
  '.skeleton': {
    '@apply opacity-4 transition-opacity h-full w-full bg-[linear-gradient(90deg,#9ca3af_20%,#374151_50%,#9ca3af_80%)]': {},
    "animation":"skeletonWave 2.5s linear infinite",
    "background-size":"400% 100%"
  }
});