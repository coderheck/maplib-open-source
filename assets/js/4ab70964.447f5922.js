"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[745],{98111:e=>{e.exports=JSON.parse('{"functions":[{"name":"Teleport","desc":"This function can be used to teleport players.\\n\\n**Example:**\\n```lua\\n--Teleports all players ingame to map.Destination and makes the camera face the front.\\nlocal PlayersFeature = Maplib:GetFeature(\\"Players\\")\\nlocal TeleportFeature = Maplib:GetFeature(\\"Teleport\\")\\n\\nfor _, player in pairs(PlayersFeature:GetPlayers()) do\\n\\tTeleportFeature:Teleport(player, map.Destination.Position, true)\\nend\\n```","params":[{"name":"player","desc":"","lua_type":"{ Player? } | Player"},{"name":"endingPosition","desc":"","lua_type":"CFrame | Vector3"},{"name":"faceFront","desc":"","lua_type":"boolean"}],"returns":[],"function_type":"method","realm":["Client"],"since":"0.11","source":{"line":39,"path":"src/Features/Teleport.lua"}}],"properties":[],"types":[],"name":"Teleport","desc":"This is a MapLib Feature. It can be accessed by `MapLib:GetFeature(\\"Teleport\\")`.","source":{"line":17,"path":"src/Features/Teleport.lua"}}')}}]);