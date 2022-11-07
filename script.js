function teste() {
    var flash = {
        f: f_flash.value,
        l: l_flash.value,
        a: a_registradores_flash.value,
        s: s_flash.value,
        h: h_flash.value
    }
    var threads = {
        t: t_threads.value,
        h: h_threads.value,
        r: r3_registradores_threads.value,
        e: e_threads.value,
        a: a_threads.value,
        d: d_threads.value,
        s: s_threads.value
    }
    var dma = {
        d: d_dma.value,
        m: m_dma_memoriaMassa.value,
        a: a_dma.value

    }
    var memoriaMassa = {
        m: m_dma_memoriaMassa.value,
        e: e_registradores_memoriaMassa.value,
        m2: m_memoriaMassa.value,
        o: o_memoriaMassa.value,
        r: r_rom_memoriaMassa.value,
        i: i_memoriaMassa.value,
        a: a_quadcore_memoriaMassa.value,
        d: d_databus_memoriaMassa.value,
        e2: e_memoriaMassa.value,
        m3: m_eprom_memoriaMassa.value,
        a2: a2_memoriaMassa.value,
        s: s1_memoriaMassa.value,
        s2: s2_memoriaMassa.value,
        a3: a_addressbus_memoriaMassa.value,

    }
    var registradores = {
        r: r_registradores.value,
        e: e_registradores_memoriaMassa.value,
        g: g_registradores.value,
        i: i_registradores.value,
        s: s_registradores.value,
        t: t_registradores.value,
        r2: r2_registradores.value,
        a: a_registradores_flash.value,
        d: d_registradores.value,
        o: o_registradores.value,
        r3: r3_registradores_threads.value,
        e2: e_registradores.value,
        s2: s2_registradores.value,

    }
    var rom = {
        r: r_rom_memoriaMassa.value,
        o: o_rom.value,
        m: m_rom.value,


    }
    var quadcore = {
        q: q_quadcore.value,
        u: u_quadcore.value,
        a: a_quadcore_memoriaMassa.value,
        d: d_quadcore.value,
        c: c_quadcore.value,
        o: o_quadcore.value,
        r: r_quadcore.value,
        e: e_quadcore.value,


    }
    var databus = {
        d: d_databus_memoriaMassa.value,
        a: a_databus.value,
        t: t_databus.value,
        a2: a2_databus.value,
        b: b_databus.value,
        u: u_databus.value,
        s: s_databus.value,

    }
    var eprom = {
        e: e_eprom.value,
        p: p_eprom.value,
        r: r_eprom_ram.value,
        o: o_eprom.value,
        m: m_eprom_memoriaMassa.value,

    }
    var ram = {
        r: r_eprom_ram.value,
        a: a_ram.value,
        m: m_ram.value,

    }
    var ula = {
        u: u_ula.value,
        l: l_ula.value,
        a: a_cache.value,

    }
    var cpu = {
        c: c_cpu_cache.value,
        p: p_cpu.value,
        u: u_addressbus.value,

    }
    var cs = {
        c: c_cs.value,
        s: s_addressbus.value,
    }
    var addressbus = {
        a: a_addressbus_memoriaMassa.value,
        d: d_addressbus.value,
        d2: d_addressbus_dualcore.value,
        r: r_addressbus.value,
        e: e_addressbus.value,
        s: s_addressbus.value,
        s2: s2_addressbus.value,
        b: b_addressbus.value,
        u: u_addressbus.value,
        s3: s3_addressbus.value,


    }
    var dualcore = {
        d: d_addressbus_dualcore.value,
        u: u_dualcore.value,
        a: a_dualcore.value,
        l: l_dualcore.value,
        c: c_dualcore.value,
        o: o_dualcore.value,
        r: r_dualcore.value,
        e: e_dualcore.value,

    }
    var cache = {
        c: c_cpu_cache.value,
        a: a_cache.value,
        c2: c_cache.value,
        h: h_cache.value,
        e: e_cache.value,

    }

    if (flash.f == 'f' && flash.l == 'l' && flash.a == 'a' && flash.s == 's' && flash.h == 'h' && threads.t == 't' && threads.h == 'h' && threads.r == 'r' && threads.e == 'e' && threads.a == 'a' && threads.d == 'd' && threads.s == 's' && dma.d == 'd' && dma.m == 'm' && dma.a == 'a' && memoriaMassa.m == 'm' && memoriaMassa.e == 'e' && memoriaMassa.m2 == 'm' && memoriaMassa.o == 'o' && memoriaMassa.r == 'r' && memoriaMassa.i == 'i' && memoriaMassa.a == 'a' && memoriaMassa.d == 'd' && memoriaMassa.e2 == 'e' && memoriaMassa.m3 == 'm' && memoriaMassa.a == 'a' && memoriaMassa.s == 's' && memoriaMassa.s2 == 's' && memoriaMassa.a2 == 'a' && registradores.r == 'r' && registradores.e == 'e' && registradores.g == 'g' && registradores.i == 'i' && registradores.s == 's' && registradores.t == 't' && registradores.r2 == 'r' && registradores.a == 'a' && registradores.d == 'd' && registradores.o == 'o' && registradores.r3 == 'r' && registradores.e2 == 'e' && registradores.s2 == 's' && rom.r == 'r' && rom.o == 'o' && rom.m == 'm' && quadcore.q == 'q' && quadcore.u == 'u' && quadcore.a == 'a' && quadcore.d == 'd' && quadcore.c == 'c' && quadcore.o == 'o' && quadcore.r == 'r' && quadcore.e == 'e' && databus.d == 'd' && databus.a == 'a' && databus.t == 't' && databus.a2 == 'a' && databus.b == 'b' && databus.u == 'u' && databus.s == 's' && eprom.e == 'e' && eprom.p == 'p' && eprom.r == 'r' && eprom.o == 'o' && eprom.m == 'm' && ram.r == 'r' && ram.a == 'a' && ram.m == 'm' && ula.u == 'u' && ula.l == 'l' && ula.a == 'a' && cpu.c == 'c' && cpu.p == 'p' && cpu.u == 'u' && cs.c == 'c' && cs.s == 's' && addressbus.a == 'a' && addressbus.d == 'd' && addressbus.d2 == 'd' && addressbus.r == 'r' && addressbus.e == 'e' && addressbus.s == 's' && addressbus.s2 == 's' && addressbus.b == 'b' && addressbus.u == 'u' && addressbus.s2 == 's' && dualcore.d == 'd' && dualcore.u == 'u' && dualcore.a == 'a' && dualcore.l == 'l' && dualcore.c == 'c' && dualcore.o == 'o' && dualcore.r == 'r' && dualcore.e == 'e' && cache.c == 'c' && cache.a == 'a' && cache.c2 == 'c' && cache.h == 'h' && cache.e == 'e') {
        alert(`PARABÉNS!!! VOCÊ CONSEGUIU COMPLETAR NOSSA PALAVRA CRUZADA!!!`)
        flash_msg.style = "color: rgb(41, 148, 8)"
        threads_msg.style = "color: rgb(41, 148, 8)"
        dma_msg.style = "color: rgb(41, 148, 8)"
        memoriaMassa_msg.style = "color: rgb(41, 148, 8)"
        registradores_msg.style = "color: rgb(41, 148, 8)"
        rom_msg.style = "color: rgb(41, 148, 8)"
        quadCore_msg.style = "color: rgb(41, 148, 8)"
        dataBus_msg.style = "color: rgb(41, 148, 8)"
        eprom_msg.style = "color: rgb(41, 148, 8)"
        ram_msg.style = "color: rgb(41, 148, 8)"
        ula_msg.style = "color: rgb(41, 148, 8)"
        cpu_msg.style = "color: rgb(41, 148, 8)"
        cs_msg.style = "color: rgb(41, 148, 8)"
        addressBus_msg.style = "color: rgb(41, 148, 8)"
        dualCore_msg.style = "color: rgb(41, 148, 8)"
        cache_msg.style = "color: rgb(41, 148, 8)"

    } else {

        if (flash.f == 'f' && flash.l == 'l' && flash.a == 'a' && flash.s == 's' && flash.h == 'h') {
            // alert(`1-Flash OK!`)
            flash_msg.style = "color: rgb(41, 148, 8)"

        } else {
            flash_msg.style = "color: red"
        }

        if (threads.t == 't' && threads.h == 'h' && threads.r == 'r' && threads.e == 'e' && threads.a == 'a' && threads.d == 'd' && threads.s == 's') {
            // alert('2-Threads OK!')
            threads_msg.style = "color: rgb(41, 148, 8)"

        } else {
            threads_msg.style = "color: red"
        }

        if (dma.d == 'd' && dma.m == 'm' && dma.a == 'a') {
            // alert('3-Dma OK!')
            dma_msg.style = "color: rgb(41, 148, 8)"

        } else {
            dma_msg.style = "color: red"
        }

        if (memoriaMassa.m == 'm' && memoriaMassa.e == 'e' && memoriaMassa.m2 == 'm' && memoriaMassa.o == 'o' && memoriaMassa.r == 'r' && memoriaMassa.i == 'i' && memoriaMassa.a == 'a' && memoriaMassa.d == 'd' && memoriaMassa.e2 == 'e' && memoriaMassa.m3 == 'm' && memoriaMassa.a == 'a' && memoriaMassa.s == 's' && memoriaMassa.s2 == 's' && memoriaMassa.a2 == 'a') {
            // alert('4-Memoria de Massa OK!')
            memoriaMassa_msg.style = "color: rgb(41, 148, 8)"

        } else {
            memoriaMassa_msg.style = "color: red"
        }

        if (registradores.r == 'r' && registradores.e == 'e' && registradores.g == 'g' && registradores.i == 'i' && registradores.s == 's' && registradores.t == 't' && registradores.r2 == 'r' && registradores.a == 'a' && registradores.d == 'd' && registradores.o == 'o' && registradores.r3 == 'r' && registradores.e2 == 'e' && registradores.s2 == 's') {
            // alert('5-Registradores OK!')
            registradores_msg.style = "color: rgb(41, 148, 8)"

        } else {
            registradores_msg.style = "color: red"
        }

        if (rom.r == 'r' && rom.o == 'o' && rom.m == 'm') {
            // alert('6-ROM OK!')
            rom_msg.style = "color: rgb(41, 148, 8)"

        } else {
            rom_msg.style = "color: red"
        }

        if (quadcore.q == 'q' && quadcore.u == 'u' && quadcore.a == 'a' && quadcore.d == 'd' && quadcore.c == 'c' && quadcore.o == 'o' && quadcore.r == 'r' && quadcore.e == 'e') {
            // alert('7-QuadCore OK!')
            quadCore_msg.style = "color: rgb(41, 148, 8)"

        } else {
            quadCore_msg.style = "color: red"
        }

        if (databus.d == 'd' && databus.a == 'a' && databus.t == 't' && databus.a2 == 'a' && databus.b == 'b' && databus.u == 'u' && databus.s == 's') {
            // alert('8-DataBus OK!')
            dataBus_msg.style = "color: rgb(41, 148, 8)"

        } else {
            dataBus_msg.style = "color: red"
        }

        if (eprom.e == 'e' && eprom.p == 'p' && eprom.r == 'r' && eprom.o == 'o' && eprom.m == 'm') {
            // alert('9-EPROM OK!')
            eprom_msg.style = "color: rgb(41, 148, 8)"

        } else {
            eprom_msg.style = "color: red"
        }

        if (ram.r == 'r' && ram.a == 'a' && ram.m == 'm') {
            // alert('10-RAM OK!')
            ram_msg.style = "color: rgb(41, 148, 8)"

        } else {
            ram_msg.style = "color: red"
        }

        if (ula.u == 'u' && ula.l == 'l' && ula.a == 'a') {
            // alert('11-ULA OK!')
            ula_msg.style = "color: rgb(41, 148, 8)"

        } else {
            ula_msg.style = "color: red"
        }

        if (cpu.c == 'c' && cpu.p == 'p' && cpu.u == 'u') {
            // alert('12-CPU OK!')
            cpu_msg.style = "color: rgb(41, 148, 8)"

        } else {
            cpu_msg.style = "color: red"
        }

        if (cs.c == 'c' && cs.s == 's') {
            // alert('13-CS OK!')
            cs_msg.style = "color: rgb(41, 148, 8)"

        } else {
            cs_msg.style = "color: red"
        }

        if (addressbus.a == 'a' && addressbus.d == 'd' && addressbus.d2 == 'd' && addressbus.r == 'r' && addressbus.e == 'e' && addressbus.s == 's' && addressbus.s2 == 's' && addressbus.b == 'b' && addressbus.u == 'u' && addressbus.s2 == 's') {
            // alert('14-AdressBus OK!')
            addressBus_msg.style = "color: rgb(41, 148, 8)"

        } else {
            addressBus_msg.style = "color: red"
        }

        if (dualcore.d == 'd' && dualcore.u == 'u' && dualcore.a == 'a' && dualcore.l == 'l' && dualcore.c == 'c' && dualcore.o == 'o' && dualcore.r == 'r' && dualcore.e == 'e') {
            // alert('15-DualCore OK!')
            dualCore_msg.style = "color: rgb(41, 148, 8)"

        } else {
            dualCore_msg.style = "color: red"
        }

        if (cache.c == 'c' && cache.a == 'a' && cache.c2 == 'c' && cache.h == 'h' && cache.e == 'e') {
            // alert('16-Cache OK!')
            cache_msg.style = "color: rgb(41, 148, 8)"

        } else {
            cache_msg.style = "color: red"
        }
    }    
    
}




// == '' &&
/* {
     alert('green')
 } else{alert('red')}*/