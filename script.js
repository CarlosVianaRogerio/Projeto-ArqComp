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
        m:m_memoriaMassa.value,
        o:o_memoriaMassa.value,
        r:r_rom_memoriaMassa.value,
        i:i_memoriaMassa.value,
        a:a_quadcore_memoriaMassa.value,
        d:d_databus_memoriaMassa.value,
        e:e_memoriaMassa.value,
        m:m_eprom_memoriaMassa.value,
        a:a2_memoriaMassa.value,
        s:s1_memoriaMassa.value,
        s2:s2_memoriaMassa.value,
        a:a_addressbus_memoriaMassa.value,

    }
    var registradores = {
        r:r_registradores.value,
        e:e_registradores_memoriaMassa.value,
        g:g_registradores.value,
        i:i_registradores.value,
        s:s_registradores.value,
        t:t_registradores.value,
        r:r_registradores_threads.value,
        a:a_registradores_flash.value,
        d:d_registradores.value,
        o:o_registradores.value,
        r:r_registradores_threads.value,
        e:e_registradores.value,
        s:s_registradores.value,

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
        a:a_databus.value,
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
        d:d_addressbus_dualcore.value,
        r:r_addressbus.value,
        e:e_addressbus.value,
        s:s_addressbus.value,
        s:s2_addressbus.value,
        b:b_addressbus.value,
        u:u_addressbus.value,
        s:s_addressbus.value,


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
        c:c_cache.value,
        h:h_cache.value,
        e: e_cache.value,

    }

    if (flash.f == '' && flash.l == '' && flash.a == '' && flash.s == '' && flash.h == '') {
        
    } else {
        alert(`Deu certo`)
    }
}