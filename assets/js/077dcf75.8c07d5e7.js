"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[100],{78843:e=>{e.exports=JSON.parse('{"functions":[{"name":"GetPlayers","desc":"This function can be used to get all players in the current round.\\n\\n**Example:**\\n```lua\\n--Teleports all players ingame to map.Destination.\\nlocal PlayersFeature = Maplib:GetFeature(\\"Players\\")\\nlocal TeleportFeature = Maplib:GetFeature(\\"Teleport\\")\\n\\nfor _, player in pairs(PlayersFeature:GetPlayers()) do\\n\\tTeleportFeature:Teleport(player, map.Destination.Position)\\nend\\n```\\t","params":[],"returns":[{"desc":"","lua_type":"{Player?}"}],"function_type":"method","source":{"line":36,"path":"src/Features/Players.lua"}},{"name":"GetPlayersInRadius","desc":"This function can be used to get all the players which are in a radius from a position.\\n\\n**Example:**\\n```lua\\n--Teleports all players that are within 5 studs from map.Spawn.\\nlocal PlayersFeature = Maplib:GetFeature(\\"Players\\")\\nlocal TeleportFeature = Maplib:GetFeature(\\"Teleport\\")\\n\\nfor _, player in pairs(PlayersFeature:GetPlayersInRadius(map.Spawn.Position, 5)) do\\n\\tTeleportFeature:Teleport(player, map.Destination.Position)\\nend\\n```\\t","params":[{"name":"position","desc":"","lua_type":"Vector3"},{"name":"radius","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"{Player?}"}],"function_type":"method","since":"0.11","source":{"line":62,"path":"src/Features/Players.lua"}}],"properties":[],"types":[],"name":"Players","desc":"This is a MapLib Feature. It can be accessed by `MapLib:GetFeature(\\"Players\\")`.","source":{"line":17,"path":"src/Features/Players.lua"}}')}}]);