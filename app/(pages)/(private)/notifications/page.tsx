import NotificationCards from "@/app/components/NotificationCards";

export default function Page() {
    interface NotificationCard {
        id: number;
        text: string;
        date: string;
        category: string;
    }

    const cards: NotificationCard[] = [
        {
            id: 5,
            text: "¡Hay una nueva encuesta disponible para ganar puntos adicionales! Participa y opina sobre el transporte público en Santander.",
            date: "10/10/2025",
            category: "Encuesta",
        },
        {
            id: 1,
            text: "Te hemos aprobado la tarjeta Trimestral Joven. Ahora ya la puedes revisar en Mis Tarjetas.",
            date: "10/10/2025",
            category: "Tarjetas",
        },
        {
            id: 2,
            text: "Recuerda tu viaje a Cuatro Caminos programado a las 18:15. ¡Te faltan 10 minutos!",
            date: "10/10/2025",
            category: "Viajes",
        },
        {
            id: 3,
            text: "Recuerda tu viaje a PCTCAN programado a las 08:57. ¡Te faltan 10 minutos!",
            date: "10/10/2025",
            category: "Viajes",
        },
        {
            id: 4,
            text: "Ha sido aprobada la recarga de la tarjeta Trimestral Joven, válida de enero a marzo.",
            date: "10/10/2025",
            category: "Tarjetas",
        },
        {
            id: 6,
            text: "Atención: Se ha actualizado el itinerario del transporte público en el centro de Santander.",
            date: "10/10/2025",
            category: "Viajes",
        },
        {
            id: 7,
            text: "El Ayuntamiento de Santander anuncia la apertura de un nuevo centro cultural en el barrio Pesquero.",
            date: "10/10/2025",
            category: "Eventos",
        },
    ];


    return (
        <div className="bg-white text-black p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Notificaciones</h2>
            </div>

            {/* Notification List */}
            <NotificationCards cards={cards} />
        </div>
    );
}
