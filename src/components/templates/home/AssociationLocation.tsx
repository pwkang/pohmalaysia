import React from 'react';
import Container from '../../Container';

/**
 *
 * 砂拉越傅氏公會
 * PERSATUAN KETURUNAN HU SARAWAK
 * (SARAWAK HU ASSOCIATION)
 * PPM-016-13-21042016
 * Lot 1457, Piasau Industrial Estate, 98000 Miri, Sarawak.
 * ENCIK HU KOH MEN  016-4868965
 *
 *
 *
 * 纳闽傅氏公會
 * PERSATUAN KETURUNAN POH LABUAN
 * (LABUAN POH ASSOCIATION)
 * PPM-001-15-19052016
 * SU 3511 Jalan Kolam KG. Baru Arang, P. O. Box 37, 87000 Wilayah Persekutuan Kuala Lumpur.
 * MOHAMED RASHIDI BIN ABD WAHAB  017-6215956
 *
 *
 *
 *
 * 柔佛傅氏公会
 * PERSATUAN KETURUNAN POH, JOHOR
 * PPM-024-01-29091994
 * No. 102-A, Jalan Jeranpang, Taman Pelangi, 30050 Johor Bharu, Johor
 * ENCIK POH BOON HO  016-7169888
 *
 *
 *
 * 彭亨傅氏公会
 * PERSATUAN KETURUNAN POH PAHANG
 * (PAHANG POH ASSOCIATION)
 * PPM-012-06-03052016
 * A5740, Taman Mas, Jalan Berserah, Lorong Alor Akar 1, 25250 Kuantan, Pahang.
 * ENCIK FOO KEE FWEE-0174039811
 *
 *
 *
 * 马六甲傅氏公会
 * PERSATUAN KETURUNAN POH MELAKA
 * (MALACCA POH ASSOCIATION)
 * PPM-003-04-22042016
 * JB 4233, Jalan Seri Hilir 4, Taman Seri Hilir, Batang Melaka, 77500 Melaka
 * ENCIK FOO CHIN LAI 016-2153821
 *
 *
 * 雪隆傅氏公会
 * PERSATUAN KETURUNAN POH KUALA LUMPUR DAN SELANGOR
 * PPM-017-10-11042016
 * No. 6B, Jalan SG 1/2, Seri Gombak 68100 Batu Caves,Selangor Darul Ehsan, Malaysia.
 * ENCIK POH SENG CHONG   012-4206936
 */

interface Association {
  nameCn: string;
  nameEn?: string;
  nameMy: string;
  registration: string;
  address: string;
  contactPerson: string;
  contactNumber: string;
}

const associationList: Association[] = [
  {
    nameCn: '砂拉越傅氏公會',
    nameEn: 'SARAWAK HU ASSOCIATION',
    nameMy: 'PERSATUAN KETURUNAN HU SARAWAK',
    registration: 'PPM-016-13-21042016',
    address: 'Lot 1457, Piasau Industrial Estate, 98000 Miri, Sarawak.',
    contactPerson: 'ENCIK HU KOH MEN',
    contactNumber: '016-4868965',
  },
  {
    nameCn: '纳闽傅氏公會',
    nameEn: 'LABUAN POH ASSOCIATION',
    nameMy: 'PERSATUAN KETURUNAN POH LABUAN',
    registration: 'PPM-001-15-19052016',
    address:
      'SU 3511 Jalan Kolam KG. Baru Arang, P. O. Box 37, 87000 Wilayah Persekutuan Kuala Lumpur.',
    contactPerson: 'MOHAMED RASHIDI BIN ABD WAHAB',
    contactNumber: '017-6215956',
  },
  {
    nameCn: '柔佛傅氏公会',
    nameMy: 'PERSATUAN KETURUNAN POH, JOHOR',
    registration: 'PPM-024-01-29091994',
    address:
      'No. 102-A, Jalan Jeranpang, Taman Pelangi, 30050 Johor Bharu, Johor',
    contactPerson: 'ENCIK POH BOON HO',
    contactNumber: '016-7169888',
  },
  {
    nameCn: '彭亨傅氏公会',
    nameEn: 'PAHANG POH ASSOCIATION',
    nameMy: 'PERSATUAN KETURUNAN POH PAHANG',
    registration: 'PPM-012-06-03052016',
    address:
      'A5740, Taman Mas, Jalan Berserah, Lorong Alor Akar 1, 25250 Kuantan, Pahang.',
    contactPerson: 'ENCIK FOO KEE FWEE',
    contactNumber: '0174039811',
  },
  {
    nameCn: '马六甲傅氏公会',
    nameEn: 'MALACCA POH ASSOCIATION',
    nameMy: 'PERSATUAN KETURUNAN POH MELAKA',
    registration: 'PPM-003-04-22042016',
    address:
      'JB 4233, Jalan Seri Hilir 4, Taman Seri Hilir, Batang Melaka, 77500 Melaka',
    contactPerson: 'ENCIK FOO CHIN LAI',
    contactNumber: '016-2153821',
  },
  {
    nameCn: '雪隆傅氏公会',
    nameMy: 'PERSATUAN KETURUNAN POH KUALA LUMPUR DAN SELANGOR',
    registration: 'PPM-017-10-11042016',
    address:
      'No. 6B, Jalan SG 1/2, Seri Gombak 68100 Batu Caves,Selangor Darul Ehsan, Malaysia.',
    contactPerson: 'ENCIK POH SENG CHONG',
    contactNumber: '012-4206936',
  },
];

function AssociationLocation() {
  return (
    <Container className="mt-6 py-4 px-0">
      <h1>傅氏各属会</h1>
      <div className="mt-4">
        {associationList.map((association, index) => (
          <div key={index} className="py-6 px-8 odd:bg-gray-100 w-full font-cn">
            <h3 className="font-bold text-xl">{association.nameCn}</h3>
            <p className="font-bold text-xl">{association.nameMy}</p>
            {association.nameEn && (
              <p className="text-sm">({association.nameEn})</p>
            )}
            <p className="text-sm mb-4">{association.registration}</p>
            <p className="text-sm">{association.address}</p>
            <p className="text-sm">
              {association.contactPerson} {association.contactNumber}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default AssociationLocation;
