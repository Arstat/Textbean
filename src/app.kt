package com.beeper
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.server.plugins.cors.routing.*

fun main() {
    embeddedServer(Netty, port = 8080) {
        module()
    }.start(wait = true)
}

fun Application.module() {
    install(CORS) {
        anyHost()
    }

    routing {
        get(api) {
            call.respond("root@162.23.56.123 /src/main/kotlin/com/example/Textbean.kt")
        }
    }
}
