import unplugin from './unplugin'
import vue from './vue'
import windicss from './windicss'

export function setupVitePlugins() {
  const plugins = [vue, windicss, ...unplugin]
  return plugins
}
