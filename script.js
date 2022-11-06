function teste() {
    var flash = {
        f : f_flash.value,
        l : l_flash.value,
        a : a_registradores_flash.value,
        s : s_flash.value,
        h : h_flash.value
    }
    var threads = {
        t:t_threads.value,
        h:h_threads.value,
        r:r_registradores_threads.value,
        e:e_threads.value,
        a:a_threads.value,
        d:d_threads.value,
        s:s_threads.value
    }
    var dma = {
        d:d_dma.value,
        m:m_dma_memoriaMassa.value,
        a:a_dma.value

    }
    var memoriaMassa = {
        m:m_dma_memoriaMassa.value,
        e:e_registradores_memoriaMassa.value,
        m2:m_memoriaMassa.value,
        o:o_memoriaMassa.value,
        r:r_rom_memoriaMassa.value,
        i:i_memoriaMassa.value,
        a:a_quadcore_memoriaMassa.value,
        d:d_databus_memoriaMassa.value,
        e2:e_memoriaMassa.value,
        m3:m_eprom_memoriaMassa.value,
        a2:a2_memoriaMassa.value,
        s:s1_memoriaMassa.value,
        s2:s2_memoriaMassa.value,
        a3:a_addressbus_memoriaMassa.value,

    }
    var registradores = {
        r:r_registradores.value,
        e:e_registradores_memoriaMassa.value,
        g:g_registradores.value,
        i:i_registradores.value,
        s:s_registradores.value,
        t:t_registradores.value,
        r2:r_registradores_threads.value,
        a:a_registradores_flash.value,
        d:d_registradores.value,
        o:o_registradores.value,
        r3:r_registradores_threads.value,
        e2:e_registradores.value,
        s2:s_registradores.value,

    }
    var rom = {
        r:r_rom_memoriaMassa.value,
        o:o_rom.value,
        m:m_rom.value,


    }
    var quadcore = {
        q:q_quadcore.value,
        u:u_quadcore.value,
        a:a_quadcore_memoriaMassa.value,
        d:d_quadcore.value,
        c:c_quadcore.value,
        o:o_quadcore.value,
        r:r_quadcore.value,
        e:e_quadcore.value,
        

    }
    var databus = {
        d:d_databus_memoriaMassa.value,
        a:a_databus.value,
        t:t_databus.value,
        a2:a_databus.value,
        b:b_databus.value,
        u:u_databus.value,
        s:s_databus.value,

    }
    var eprom = {
        e:e_eprom.value,
        p:p_eprom.value,
        r:r_eprom_ram.value,
        o:o_eprom.value,
        m:m_eprom_memoriaMassa.value,

    }
    var ram = {
        r:r_eprom_ram.value,
        a:a_ram.value,
        m:m_ram.value,

    }
    var ula = {
        u:u_ula.value,
        l:l_ula.value,
        a:a_cache.value,

    }
    var cpu = {
        c:c_cpu_cache.value,
        p:p_cpu.value,
        u:u_addressbus.value,

    }
    var cs = {
        c:c_cs.value,
        s:s_addressbus.value,
    }
    var addressbus= {
        a:a_addressbus_memoriaMassa.value,
        d:d_addressbus.value,
        d2:d_addressbus_dualcore.value,
        r:r_addressbus.value,
        e:e_addressbus.value,
        s:s_addressbus.value,
        s2:s2_addressbus.value,
        b:b_addressbus.value,
        u:u_addressbus.value,
        s3:s_addressbus.value,


    }
    var dualcore ={
        d:d_addressbus_dualcore.value,
        u:u_dualcore.value,
        a:a_dualcore.value,
        l:l_dualcore.value,
        c:c_dualcore.value,
        o:o_dualcore.value,
        r:r_dualcore.value,
        e:e_dualcore.value,

    }
    var cache= {
        c:c_cpu_cache.value,
        a:a_cache.value,
        c2:c_cache.value,
        h:h_cache.value,
        e: e_cache.value,

    }

    if (flash.f == '' && flash.l == '' && flash.a == '' && flash.s == '' && flash.h == '') {
    } else if (flash.f == 'f' && flash.l == 'l' && flash.a == 'a' && flash.s == 's' && flash.h == 'h') {
        alert(`green`)
    } else{alert('red')}


    if(threads.t == '' && threads.h == '' && threads.r == '' && threads.e == '' && threads.a == '' && threads.d == '' && threads.s == '' ){
    } else if (threads.t == 't' && threads.h == 'h' && threads.r == 'r' && threads.e == 'e' && threads.a == 'a' && threads.d == 'd' && threads.s == 's' ){
        alert('green')
    } else{alert('red')}

    if(dma.d == '' && dma.m == '' && dma.a == ''){
    } else if(dma.d == '' && dma.m == '' && dma.a == ''){
        alert('green')
    } else{alert('red')}

    if(memoriaMassa.m == '' && memoriaMassa.e == '' && memoriaMassa.m2 == '' && memoriaMassa.o == '' && memoriaMassa.r == '' && memoriaMassa.i == '' && memoriaMassa.a == '' && memoriaMassa.d == '' && memoriaMassa.e2 == '' && memoriaMassa.m3 == '' && memoriaMassa.a == '' && memoriaMassa.s == '' && memoriaMassa.s2 == '' && memoriaMassa.a2 == ''){
    }else if(memoriaMassa.m == 'm' && memoriaMassa.e == 'e' && memoriaMassa.m2 == 'm' && memoriaMassa.o == 'o' && memoriaMassa.r == 'r' && memoriaMassa.i == 'i' && memoriaMassa.a == 'a' && memoriaMassa.d == 'd' && memoriaMassa.e2 == 'e' && memoriaMassa.m3 == 'm' && memoriaMassa.a == 'a' && memoriaMassa.s == 's' && memoriaMassa.s2 == 's' && memoriaMassa.a2 == 'a'){
        alert('green')
    } else{alert('red')}

    if(registradores.r == '' && registradores.e == '' && registradores.g == '' && registradores.i == '' && registradores.s == '' && registradores.t == '' && registradores.r2 == '' && registradores.a == '' && registradores.d == '' && registradores.o == '' && registradores.r3 == '' && registradores.e2 == '' && registradores.s2== ''){
    } else if(registradores.r == 'r' && registradores.e == 'e' && registradores.g == 'g' && registradores.i == 'i' && registradores.s == 's' && registradores.t == 't' && registradores.r2 == 'r' && registradores.a == 'a' && registradores.d == 'd' && registradores.o == 'o' && registradores.r3 == 'r' && registradores.e2 == 'e' && registradores.s2== 's'){
        alert('green')
    } else{alert('red')}

    if(rom.r == '' && rom.o == '' && rom.m == ''){
    } else if(rom.r == 'r' && rom.o == 'o' && rom.m == 'm'){
        alert('green')
    } else{alert('red')}

    if(quadcore.q == '' && quadcore.u == '' && quadcore.a == '' && quadcore.d == '' && quadcore.c == '' && quadcore.o == '' && quadcore.r == '' && quadcore.e == ''){
    } else if(quadcore.q == 'q' && quadcore.u == 'u' && quadcore.a == 'a' && quadcore.d == 'd' && quadcore.c == 'c' && quadcore.o == 'o' && quadcore.r == 'r' && quadcore.e == 'e'){
        alert('green')
    } else{alert('red')}

    if(databus.d == '' && databus.a == '' && databus.t == '' && databus.a2 == '' && databus.b == '' && databus.u == '' && databus.s == ''){
    } else if (databus.d == 'd' && databus.a == 'a' && databus.t == 't' && databus.a2 == 'a' && databus.b == 'b' && databus.u == 'u' && databus.s == 's'){
        alert('green')
    } else{alert('red')}

    if(eprom.e == '' && eprom.p == '' && eprom.r == '' && eprom.o == '' && emprom.m == '' ){
    } else if(eprom.e == 'e' && eprom.p == 'p' && eprom.r == 'r' && eprom.o == 'o' && emprom.m == 'm' ){
        alert('green')
    } else{alert('red')}

    if(ram.r == '' && ram.a == '' && ram.m == ''){
    } else if(ram.r == 'r' && ram.a == 'a' && ram.m == 'm'){
        alert('green')
    } else{alert('red')}


    if(cpu.c == '' && cpu.p == '' && cpu.u == ''){
    } else if(cpu.c == 'c' && cpu.p == 'p' && cpu.u == 'u'){
        alert('green')
    } else{alert('red')}

    if(cs.c == '' && cs.s == ''){
    } else if(cs.c == 'c' && cs.s == 's'){
        alert('green')
    } else{alert('red')}

    if(addressbus.a == '' && addressbus.d == '' && addressbus.d2 == '' && addressbus.r == '' && addressbus.e == '' && addressbus.s == '' && addressbus.s2 == '' && addressbus.b == '' && addressbus.u == '' &&addressbus.s2 == ''){
    }else if(addressbus.a == 'a' && addressbus.d == 'd' && addressbus.d2 == 'd' && addressbus.r == 'r' && addressbus.e == 'e' && addressbus.s == 's' && addressbus.s2 == 's' && addressbus.b == 'b' && addressbus.u == 'u' &&addressbus.s2 == 's'){
        alert('green')
    } else{alert('red')}

    if(dualcore.d == '' && dualcore.u == '' && dualcore.a == '' && dualcore.l == '' && dualcore.c == '' && dualcore.o == '' && dualcore.r == '' && dualcore.e == ''){
    } else if(dualcore.d == 'd' && dualcore.u == 'u' && dualcore.a == 'a' && dualcore.l == 'l' && dualcore.c == 'c' && dualcore.o == 'o' && dualcore.r == 'r' && dualcore.e == 'e'){
        alert('green')
    } else{alert('red')}

    if(cache.c == '' && cache.a == '' && cache.c2 == '' && cache.h == '' && cache.e == ''){
    } else if(cache.c == 'c' && cache.a == 'a' && cache.c2 == 'c' && cache.h == 'h' && cache.e == 'e'){
        alert('green')
    } else{alert('red')}
}   



    
// == '' &&
/* {
     alert('green')
 } else{alert('red')}*/